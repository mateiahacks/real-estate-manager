import RealEstateForm from "../../components/forms/RealEstateForm";

const CreateRealEstate = () => {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <h1 className="text-2xl">ლისტინგის დამატება</h1>
      <RealEstateForm />
    </div>
  );
};

export default CreateRealEstate;
