import { Dispatch, SetStateAction, useRef } from "react";
import { useGetAgents } from "../../lib/react-query/queries";
import { Dropdown } from "../ui";
import DropdownItem from "./DropdownItem";
import { useToggle } from "../../hooks/useToggle";
import useOutsideClick from "../../hooks/useOutsideClick";
import { IAgent } from "../../types";

interface AgentDropdownProps {
  agent: IAgent | null;
  setAgent: Dispatch<SetStateAction<IAgent | null>>;
}

const AgentDropdown = ({ agent, setAgent }: AgentDropdownProps) => {
  const { data: agents, isFetching } = useGetAgents();
  const [isOpen, toggleIsOpen] = useToggle(false);
  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen);

  const onSelect = (_agent: IAgent) => {
    setAgent(_agent);
    toggleIsOpen();
  };

  return (
    <div className="w-full relative">
      <Dropdown label="აირჩიე" selected={agent} onClick={toggleIsOpen} />
      {!isFetching && isOpen && (
        <div className="dropdown-data" ref={ref}>
          {agents.map((agent: IAgent) => (
            <DropdownItem
              onClick={() =>
                onSelect({ ...agent, name: `${agent.name} ${agent.surname}` })
              }
              key={agent.id}
            >
              <p>{`${agent.name} ${agent.surname}`}</p>
            </DropdownItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default AgentDropdown;
