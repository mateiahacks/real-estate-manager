import { Button, ImageUpload, Input } from "../ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AgentValidation } from "../../lib/validation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateAgent } from "../../lib/react-query/queries";
import { formData } from "../../lib/utils";
import Loader from "../shared/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../lib/react-query/queryKeys";
import { useLocalStorageImage } from "../../hooks/useLocalStorageImage";
import { MAX_FILE_SIZE } from "../../lib/constants";

type FormFields = z.infer<typeof AgentValidation>;

interface AgentFormProps {
  toggleIsOpen: () => void;
}

const AgentForm = ({ toggleIsOpen }: AgentFormProps) => {
  const methods = useForm<FormFields>({
    resolver: zodResolver(AgentValidation),
    mode: "all",
  });
  const queryClient = useQueryClient();
  const { handleSubmit } = methods;

  const { mutateAsync: createAgent, isPending: isCreating } = useCreateAgent();

  const {
    blob: savedImage,
    clearImage,
    saveImage,
  } = useLocalStorageImage(true);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    const isImageType: boolean = savedImage
      ? savedImage.type.includes("image")
      : true;
    if (
      data.avatar.length === 0 ||
      data.avatar[0].size > MAX_FILE_SIZE ||
      !isImageType
    ) {
      return; // check for image validation
    }
    try {
      await createAgent(formData({ ...data, avatar: data.avatar[0] }));
      toggleIsOpen();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_AGENTS] }); // invalidate agents
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-block">
          <div className="flex gap-5 mb-12">
            <Input
              name="name"
              label="სახელი *"
              type="text"
              rule="მინიმუმ ორი სიმბოლო"
            />
            <Input
              name="surname"
              label="გვარი"
              type="text"
              rule="მინიმუმ ორი სიმბოლო"
            />
          </div>
          <div className="flex gap-5 mb-12">
            <Input
              name="email"
              label="ელფოსტა *"
              type="email"
              rule="გამოიყენეთ @redberry.ge ფოსტა"
            />
            <Input
              name="phone"
              label="ტელეფონის ნომერი"
              type="text"
              rule="მხოლოდ რიცხვები"
            />
          </div>
          <ImageUpload
            name="avatar"
            label="ატვირთეთ ფოტო *"
            saveImage={saveImage}
            savedImage={savedImage}
            clearImage={clearImage}
            isModal={true}
          />
        </div>
        <div className="flex flex-row-reverse gap-3 mt-5">
          <Button variant={"primary"} type="submit">
            {isCreating ? (
              <Loader className="text-primary fill-white" />
            ) : (
              "დაამატე აგენტი"
            )}
          </Button>
          <Button variant={"secondary"} onClick={toggleIsOpen} type="button">
            გაუქმება
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AgentForm;
