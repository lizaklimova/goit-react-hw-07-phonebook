import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilterSearch } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";
import {
  ContactLi,
  ContactWrapper,
  ContactDeleteBtn,
  ContactIcon,
} from "./ContactEl.styled";

export default function ContactEl() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterSearch);

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter);
  });

  return (
    <>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, phone, avatar }, i) => (
          <ContactLi key={id}>
            <ContactWrapper>
              <ContactIcon $avatar={avatar}></ContactIcon>
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
