import { Button, ImageUpload, Input } from "../ui";

const AgentForm = () => {
  return (
    <form className="flex flex-col w-full">
      <div className="form-block">
        <div className="flex gap-5 mb-12">
          <Input label="სახელი *" type="text" rule="მინიმუმ ორი სიმბოლო" />
          <Input label="გვარი" type="text" rule="მინიმუმ ორი სიმბოლო" />
        </div>
        <div className="flex gap-5 mb-12">
          <Input
            label="ელფოსტა *"
            type="email"
            rule="გამოიყენეთ @redberry.ge ფოსტა"
          />
          <Input label="ტელეფონის ნომერი" type="text" rule="მხოლოდ რიცხვები" />
        </div>
        <ImageUpload label="ატვირთეთ ფოტო *" />
      </div>
      <div className="flex flex-row-reverse gap-3 mt-5">
        <Button variant={"primary"} type="submit">
          დაამატე აგენტი
        </Button>
        <Button variant={"secondary"}>გაუქმება</Button>
      </div>
    </form>
  );
};

export default AgentForm;
