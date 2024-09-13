import { Button, ImageUpload, Input } from "../ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AgentValidation } from "../../lib/validation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormFields = z.infer<typeof AgentValidation>;

interface AgentFormProps {
  toggleIsOpen: () => void;
}

const AgentForm = ({ toggleIsOpen }: AgentFormProps) => {
  const methods = useForm<FormFields>({
    resolver: zodResolver(AgentValidation),
    mode: "all",
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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
          <ImageUpload name="avatar" label="ატვირთეთ ფოტო *" />
        </div>
        <div className="flex flex-row-reverse gap-3 mt-5">
          <Button variant={"primary"} type="submit">
            დაამატე აგენტი
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
