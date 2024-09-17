interface FilterTagProps {
  content: string;
  remove: () => void;
}

const FilterTag = ({ content, remove }: FilterTagProps) => {
  return (
    <div className="filter-tag">
      <p>{content}</p>
      <img
        src="/assets/icons/x.png"
        alt="x"
        className="cursor-pointer"
        onClick={remove}
      />
    </div>
  );
};

export default FilterTag;
