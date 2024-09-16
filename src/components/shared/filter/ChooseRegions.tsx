import { useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import { IDropdownItem } from "../../../types";
import Checkbox from "../../ui/Checkbox";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { Button } from "../../ui";
import { useRealEstateFilter } from "../../../hooks/useRealEstateFilter";

interface ChooseRegionsProps {
  regions: IDropdownItem[];
  toggleIsOpen: () => void;
}

const ChooseRegions = ({ regions, toggleIsOpen }: ChooseRegionsProps) => {
  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen);

  const [checkedRegions, setCheckedRegions] = useState<IDropdownItem[]>([]);
  const { setFilters } = useRealEstateFilter();

  const filter = () => {
    setFilters({ regions: checkedRegions.map((r) => r.name) });
    toggleIsOpen();
  };

  const checkRegion = (region: IDropdownItem) => {
    setCheckedRegions((prevState: IDropdownItem[]) => {
      if (isRegionChecked(region.id)) {
        return prevState.filter((r) => r.id !== region.id);
      }
      return [...prevState, region];
    });
  };

  const isRegionChecked = (id: number): boolean => {
    return checkedRegions.map((r) => r.id).includes(id);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-4 py-4 px-3 absolute top-10 -left-1 w-[600px]",
        "bg-white z-10 border border-gray-1 shadow-md rounded-md"
      )}
    >
      <p className="text-sm figa-go-light ml-2">რეგიონის მიხედვით</p>
      <div className="grid grid-cols-3">
        {regions?.map((region) => (
          <div className="p-2 mb-1" key={region.id}>
            <Checkbox
              label={region.name}
              isChecked={isRegionChecked(region.id)}
              onClick={() => checkRegion(region)}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row-reverse">
        <Button
          onClick={filter}
          size={"sm"}
          className="fira-go-light font-bold mr-2"
        >
          არჩევა
        </Button>
      </div>
    </div>
  );
};

export default ChooseRegions;
