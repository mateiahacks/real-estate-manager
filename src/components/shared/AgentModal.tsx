import Modal from "react-modal";
import AgentForm from "../forms/AgentForm";

interface ModalProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const AgentModal = ({ isOpen, toggleIsOpen }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      ariaHideApp={false}
      className={
        "modal-content p-16 w-1/2 flex flex-col items-center justify-center rounded-md"
      }
      shouldCloseOnOverlayClick={true}
      onRequestClose={toggleIsOpen}
    >
      <h1 className="text-xl mb-10">აგენტის დამატება</h1>
      <AgentForm />
    </Modal>
  );
};

export default AgentModal;
