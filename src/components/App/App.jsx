import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { Container, Wrapper } from "./App.styled";
import ContactsList from "components/ContactsList/ContactsList";
import { selectContacts, selectIsLoading } from "../../redux/selectors";
import Header from "components/Header/Header";
import Modal from "components/Modal/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <Container>
        <Wrapper>
          <Header openModal={openModal} />
          {isModalOpen && <Modal closeModal={closeModal} />}

          {contacts && contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <p>No contacts added yet</p>
          )}
        </Wrapper>

        {/* <h1>Phonebook</h1>
        <ContactsForm />
        <ContactsSection>
          <h2>Contacts</h2>
         

          {contacts && contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <p>No contacts added yet</p>
          )}
        </ContactsSection> */}
      </Container>
    </>
  );
}
