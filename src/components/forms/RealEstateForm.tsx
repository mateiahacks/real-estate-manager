import { useState } from "react";
import {
  Button,
  Dropdown,
  ImageUpload,
  Input,
  RadioButton,
  Textarea,
} from "../ui";
import { Link } from "react-router-dom";

const RealEstateForm = () => {
  const [is_rental, set_is_rental] = useState<boolean>(false);

  return (
    <form className="flex flex-col w-1/2 gap-14">
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
          <Dropdown label="რეგიონი" />
          <Dropdown label="ქალაქი" />
        </div>
      </div>

      <div className="form-block">
        <label>ბინის დეტალები</label>
        <div className="flex gap-5 mb-12">
          <Input name="price" label="ფასი" type="text" rule="მხოლოდ რიცხვები" />
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
        <Textarea label="აღწერა *" rule="მინიმუმ ხუთი სიტყვა" />
        <ImageUpload name="image" label="ატვირთეთ ფოტო *" />
      </div>

      <div className="form-block">
        <label>აგენტი</label>
        <div className="flex gap-5 mb-12">
          <Dropdown label="აირჩიე" />
          <Dropdown className="invisible" />
        </div>
      </div>

      <div className="flex flex-row-reverse gap-3 mb-10">
        <Button variant={"primary"} type="submit">
          დაამატე ლისტინგი
        </Button>
        <Link to={"/"}>
          <Button variant={"secondary"} type="button">
            გაუქმება
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default RealEstateForm;
