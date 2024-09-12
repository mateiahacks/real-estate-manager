import { useState } from "react";
import { Button, Input, RadioButton, Textarea } from "../ui";
import Dropdown from "../ui/Dropdown";

const RealEstateForm = () => {
  const [is_rental, set_is_rental] = useState<boolean>(false);

  return (
    <form className="flex flex-col w-1/2 gap-16">
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
          <Input label="მისამართი *" type="text" rule="მინიმუმ ორი სიმბოლო" />
          <Input label="საფოსტო ინდექსი *" type="text" rule="მხოლოდ რიცხვები" />
        </div>
        <div className="flex gap-5 mb-12">
          <Dropdown label="რეგიონი" />
          <Dropdown label="ქალაქი" />
        </div>
      </div>

      <div className="form-block">
        <label>ბინის დეტალები</label>
        <div className="flex gap-5 mb-12">
          <Input label="ფასი" type="text" rule="მხოლოდ რიცხვები" />
          <Input label="ფართობი" type="text" rule="მხოლოდ რიცხვები" />
        </div>
        <div className="flex gap-5 mb-12">
          <Input
            label="საძინებლების რაოდენობა *"
            type="text"
            rule="მხოლოდ რიცხვები"
          />
          <Input className="invisible" />
        </div>
        <Textarea label="აღწერა *" rule="მინიმუმ ხუთი სიტყვა" />
      </div>

      <div className="flex flex-row-reverse gap-3 mb-10">
        <Button variant={"primary"} type="submit">
          დაამატე ლისტინგი
        </Button>
        <Button variant={"secondary"}>გაუქმება</Button>
      </div>
    </form>
  );
};

export default RealEstateForm;
