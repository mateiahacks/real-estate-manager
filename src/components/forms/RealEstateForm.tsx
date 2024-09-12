import { useState } from "react";
import RadioButton from "../ui/RadioButton";

const RealEstateForm = () => {
  const [is_rental, set_is_rental] = useState<boolean>(false);

  return (
    <form className="flex flex-col w-1/2 gap-5">
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
    </form>
  );
};

export default RealEstateForm;
