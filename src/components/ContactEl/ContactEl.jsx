import { useDispatch, useSelector } from "react-redux";
import {
  ContactLi,
  ContactWrapper,
  ContactDeleteBtn,
  ContactIcon,
} from "./ContactEl.styled";
import { selectContacts, selectFilterSearch } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";

export default function ContactEl() {
  const dispatch = useDispatch();

  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilterSearch);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter);
  });

  return (
    <>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, phone }, i) => (
          <ContactLi key={id}>
            <ContactWrapper>
              <ContactIcon>
                {name && name.slice(0, 1).toUpperCase()}
              </ContactIcon>
              <p>
                {name}: {phone}
              </p>
            </ContactWrapper>
            <ContactDeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete ❌
            </ContactDeleteBtn>
          </ContactLi>
        ))
      ) : (
        <div>No contacts found on filter {filter}</div>
      )}
    </>
  );
}
