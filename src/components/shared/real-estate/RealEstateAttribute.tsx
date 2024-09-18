interface RealEstateAttributeProps {
  content: string;
  icon: string;
}

const RealEstateAttribute = ({ content, icon }: RealEstateAttributeProps) => {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt="attribute" className="w-3" />
      <p className="text-md fira-go-light font-bold text-gray-2">{content}</p>
    </div>
  );
};

export default RealEstateAttribute;
