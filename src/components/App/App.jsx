import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import ContactsList from "components/ContactsList/ContactsList";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";
import Header from "components/Header/Header";
import Modal from "components/Modal/Modal";
import { MdOutlineSearchOff } from "react-icons/md";
import { Container, Wrapper, NoContactsMsg } from "./App.styled";
import FilterSearch from "components/FilterSearch/FilterSearch";

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

          <FilterSearch />

          {contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <NoContactsMsg>
              No contacts added yet <MdOutlineSearchOff size={30} />
            </NoContactsMsg>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
