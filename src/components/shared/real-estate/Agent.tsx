import { IAgent } from "../../../types";

interface AgentProps {
  agent: IAgent | undefined;
}

const Agent = ({ agent }: AgentProps) => {
  if (!agent) {
    return null;
  }
  return (
    <div className="flex flex-col gap-3 w-[70%] py-4 px-3 rounded-md border border-gray-1">
      <div className="flex items-center gap-5">
        <img
          src={agent.avatar}
          alt="avatar"
          className="rounded-[50%] w-16 h-16 object-center object-cover"
        />
        <div>
          <p className="text-sm">
            {agent.name} {agent.surname}
          </p>
          <p className="text-xs text-gray-2">აგენტი</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src="/assets/icons/email.png" alt="email" className="w-4 h-3" />
        <p className="text-xs text-gray-2">{agent.email}</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="/assets/icons/phone.png" alt="phone" className="w-4 h-4" />
        <p className="text-xs text-gray-2">{agent.phone}</p>
      </div>
    </div>
  );
};

export default Agent;
