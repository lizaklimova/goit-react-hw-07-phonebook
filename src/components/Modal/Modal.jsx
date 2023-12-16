import { IoMdClose } from "react-icons/io";
import ContactsForm from "components/ContactsForm/ContactsForm";
import { ModalBackdrop, ModalWin, CloseModalBtn } from "./Modal.styled";

const Modal = ({ closeModal }) => {
  return (
    <ModalBackdrop>
      <ModalWin>
        <CloseModalBtn type="button" onClick={closeModal}>
          <IoMdClose size={30} />
        </CloseModalBtn>
        <ContactsForm closeModal={closeModal} />
      </ModalWin>
    </ModalBackdrop>
  );
};

export default Modal;
