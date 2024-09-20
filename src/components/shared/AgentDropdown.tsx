import { useRef } from "react";
import { useGetAgents } from "../../lib/react-query/queries";
import { Dropdown } from "../ui";
import DropdownItem from "./DropdownItem";
import { useToggle } from "../../hooks/useToggle";
import useOutsideClick from "../../hooks/useOutsideClick";
import { IAgent } from "../../types";

interface AgentDropdownProps {
  agent: IAgent | null;
  setAgent: (agent: IAgent | null) => void;
  toggleShowAgentModal: () => void;
}

const AgentDropdown = ({
  agent,
  setAgent,
  toggleShowAgentModal,
}: AgentDropdownProps) => {
  const { data: agents, isFetching } = useGetAgents();
  const [isOpen, toggleIsOpen] = useToggle(false);
  const ref = useRef(null);
  useOutsideClick(ref, toggleIsOpen);

  const onSelect = (_agent: IAgent) => {
    setAgent(_agent);
    toggleIsOpen();
  };

  const onAddAgent = () => {
    toggleShowAgentModal();
    toggleIsOpen();
  };

  return (
    <div className="w-full relative">
      <Dropdown label="აირჩიე" selected={agent} onClick={toggleIsOpen} />
      {!isFetching && isOpen && (
        <div className="dropdown-data" ref={ref}>
          <DropdownItem
            className="flex items-center gap-3 px-3 py-2"
            onClick={onAddAgent}
          >
            <img src="/assets/icons/plus-circle.png" alt="plus-circle" />
            <p>დაამატე აგენტი</p>
          </DropdownItem>
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
