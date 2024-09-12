import { useState } from "react";
import { Button, Input, RadioButton, Textarea } from "../ui";

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
        <div className="flex gap-5">
          <Input label="მისამართი *" type="text" />
          <Input label="საფოსტო ინდექსი *" type="text" />
        </div>
      </div>

      <div className="form-block">
        <label>ბინის დეტალები</label>
        <div className="flex gap-5 mb-6">
          <Input label="ფასი" type="text" />
          <Input label="ფართობი" type="text" />
        </div>
        <div className="flex gap-5">
          <Input label="საძინებლების რაოდენობა *" type="text" />
          <Input className="invisible" />
        </div>
      </div>
      <div className="form-block">
        <Textarea label="აღწერა *" />
      </div>
      <div className="flex flex-row-reverse gap-3 mb-10">
        <Button variant={"primary"}>დაამატე ლისტინგი</Button>
        <Button variant={"secondary"}>გაუქმება</Button>
      </div>
    </form>
  );
};

export default RealEstateForm;
