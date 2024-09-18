import Modal from "react-modal";
import { Button } from "../ui";
import Loader from "./Loader";

interface ConfirmationModalProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
  onApprove: () => void;
  isPending: boolean;
}

const ConfirmationModal = ({
  isOpen,
  toggleIsOpen,
  onApprove,
  isPending,
}: ConfirmationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={"modal-overlay"}
      ariaHideApp={false}
      className={
        "modal-content p-12 text-center sm:w-[500px] w-[300px] relative flex flex-col gap-7 items-center justify-center rounded-2xl"
      }
      shouldCloseOnOverlayClick={false}
      onRequestClose={toggleIsOpen}
    >
      <p className="text-dark-gray fira-go-light font-bold">
        გსურთ წაშალოთ ლისტინგი?
      </p>
      <div className="flex gap-3">
        <Button variant={"secondary"} onClick={toggleIsOpen}>
          გაუქმება
        </Button>
        <Button onClick={onApprove}>
          {isPending ? (
            <Loader className="text-primary fill-white" />
          ) : (
            "დადასტურება"
          )}
        </Button>
      </div>
      <img
        src="/assets/icons/x.png"
        alt="x"
        className="absolute top-3 right-4 cursor-pointer w-4"
        onClick={toggleIsOpen}
      />
    </Modal>
  );
};

export default ConfirmationModal;
