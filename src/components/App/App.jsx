import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import ContactsForm from "../ContactsForm";
import { Container, ContactsSection } from "./App.styled";
import ContactsList from "components/ContactsList/ContactsList";
import { selectContacts } from "../../redux/selectors";
import FilterSearch from "components/FilterSearch/FilterSearch";

export default function App() {
  const { contacts } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    console.log(contacts);
  }, [dispatch, contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />

      <ContactsSection>
        <h2>Contacts</h2>
        <FilterSearch />

        {contacts && contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <p>No contacts added yet</p>
        )}
      </ContactsSection>
    </Container>
  );
}
