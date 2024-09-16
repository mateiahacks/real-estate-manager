interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onClick?: () => void;
}

const Checkbox = ({ label, onClick, isChecked }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      {!isChecked && (
        <div
          className="w-5 h-5 rounded-sm border border-gray-1 cursor-pointer"
          onClick={onClick}
        ></div>
      )}
      {isChecked && (
        <img
          src="/assets/icons/checked.png"
          className="w-5 cursor-pointer"
          onClick={onClick}
        />
      )}
      <p className="fira-go-light text-xs font-bold">{label}</p>
    </div>
  );
};

export default Checkbox;
