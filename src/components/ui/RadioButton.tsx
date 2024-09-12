interface RadioButtonProps {
  label: string;
  isChecked: boolean;
  onClick: () => void;
}

const RadioButton = ({ label, onClick, isChecked }: RadioButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-full border border-black w-4 h-4 cursor-pointer"
        onClick={onClick}
      >
        {isChecked && <div className="rounded-full bg-black w-2 h-2"></div>}
      </div>
      <p className="radio-label text-xs font-bold">{label}</p>
    </div>
  );
};

export default RadioButton;
