import {
  Button,
  Dropdown,
  ImageUpload,
  Input,
  RadioButton,
  Textarea,
} from "../ui";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { RealEstateValidation } from "../../lib/validation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegionDropdown from "../shared/RegionDropdown";
import CityDropdown from "../shared/CityDropdown";
import AgentDropdown from "../shared/AgentDropdown";
import Loader from "../shared/Loader";
import { useCreateRealEstate } from "../../lib/react-query/queries";
import { formData } from "../../lib/utils";
import AgentModal from "../shared/AgentModal";
import { useToggle } from "../../hooks/useToggle";
import useFormPersist from "react-hook-form-persist";
import { useLocalStorageImage } from "../../hooks/useLocalStorageImage";
import { useDropdownStorage } from "../../hooks/useDropdownStorage";

type FormFields = z.infer<typeof RealEstateValidation>;

interface RealEstateFormProps {}

const RealEstateForm = ({}: RealEstateFormProps) => {
  const [showAgentModal, toggleShowAgentModal] = useToggle(false);

  const { blob: savedImage, clearImage, saveImage } = useLocalStorageImage();
  const {
    savedRegion: region,
    saveRegion: setRegion,
    saveCity: setCity,
    saveAgent: setAgent,
    savedCity: city,
    savedAgent: agent,
    isRental: is_rental,
    saveIsRental: set_is_rental,
  } = useDropdownStorage();

  const methods = useForm<FormFields>({
    resolver: zodResolver(RealEstateValidation),
    mode: "all",
  });

  const { handleSubmit, watch, setValue, reset } = methods;

  useFormPersist("real-estate-form", { watch, setValue });

  const navigate = useNavigate();

  const { mutateAsync: createRealEstate, isPending: isCreating } =
    useCreateRealEstate();

  const cancel = () => {
    sessionStorage.clear();
    localStorage.clear();
    reset();
    clearImage();
    navigate("/");
  };

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    if (
      !savedImage ||
      !region ||
      !city ||
      !agent ||
      savedImage?.size > 1048576
    ) {
      return; // check for dropdowns and image validation
    }
    try {
      await createRealEstate(
        formData({
          ...data,
          is_rental: is_rental ? 1 : 0,
          region_id: region?.id,
          city_id: city?.id,
          agent_id: agent?.id,
          image: savedImage,
        })
      );
      cancel();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="flex flex-col w-1/2 gap-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-block">
            <label className="text-md">გარიგების ტიპი</label>
            <div className="flex gap-24">
              <RadioButton
                label="იყიდება"
                isChecked={!is_rental}
                onClick={() => set_is_rental(false)}
              />
              <RadioButton
                label="ქირავდება"
                isChecked={is_rental}
                onClick={() => set_is_rental(true)}
              />
            </div>
          </div>

          <div className="form-block">
            <label>მდებარეობა</label>
            <div className="flex gap-5 mb-12">
              <Input
                name="address"
                label="მისამართი *"
                type="text"
                rule="მინიმუმ ორი სიმბოლო"
              />
              <Input
                name="zip_code"
                label="საფოსტო ინდექსი *"
                type="text"
                rule="მხოლოდ რიცხვები"
              />
            </div>
            <div className="flex gap-5 mb-12">
              {/* <Dropdown label="რეგიონი" /> */}
              <RegionDropdown
                region={region}
                setRegion={setRegion}
                setCity={setCity}
              />
              <CityDropdown
                city={city}
                setCity={setCity}
                region={region}
                className={region ? "" : "invisible"}
              />
            </div>
          </div>

          <div className="form-block">
            <label>ბინის დეტალები</label>
            <div className="flex gap-5 mb-12">
              <Input
                name="price"
                label="ფასი"
                type="text"
                rule="მხოლოდ რიცხვები"
              />
              <Input
                name="area"
                label="ფართობი"
                type="text"
                rule="მხოლოდ რიცხვები"
              />
            </div>
            <div className="flex gap-5 mb-12">
              <Input
                name="bedrooms"
                label="საძინებლების რაოდენობა *"
                type="text"
                rule="მხოლოდ რიცხვები"
              />
              <Input name="mock" className="invisible" />
            </div>
            <Textarea
              label="აღწერა *"
              name="description"
              rule="მინიმუმ ხუთი სიტყვა"
            />
            <ImageUpload
              name="image"
              label="ატვირთეთ ფოტო *"
              clearImage={clearImage}
              saveImage={saveImage}
              savedImage={savedImage}
            />
          </div>

          <div className="form-block">
            <label>აგენტი</label>
            <div className="flex gap-5 mb-12">
              <AgentDropdown
                agent={agent}
                setAgent={setAgent}
                toggleShowAgentModal={toggleShowAgentModal}
              />
              <Dropdown className="invisible" />
            </div>
          </div>

          <div className="flex flex-row-reverse gap-3 mb-12">
            <Button variant={"primary"} type="submit">
              {isCreating ? (
                <Loader className="text-primary fill-white" />
              ) : (
                "დაამატე ლისტინგი"
              )}
            </Button>
            <Button variant={"secondary"} type="button" onClick={cancel}>
              გაუქმება
            </Button>
          </div>
        </form>
      </FormProvider>
      <AgentModal isOpen={showAgentModal} toggleIsOpen={toggleShowAgentModal} />
    </>
  );
};

export default RealEstateForm;
