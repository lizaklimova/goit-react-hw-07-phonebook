import { IoMdClose } from "react-icons/io";
import ContactsForm from "components/ContactsForm";
import { Container } from "components/App/App.styled";
import { ModalBackdrop, ModalWin, CloseModalBtn } from "./Modal.styled";

const Modal = ({ closeModal }) => {
  return (
    <ModalBackdrop>
      <Container>
        <ModalWin>
          <CloseModalBtn type="button" onClick={closeModal}>
            <IoMdClose size={30} />
          </CloseModalBtn>
          <ContactsForm closeModal={closeModal} />
        </ModalWin>
      </Container>
    </ModalBackdrop>
  );
};

export default Modal;
