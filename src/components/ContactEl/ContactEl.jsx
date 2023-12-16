import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilterSearch } from "../../redux/filterSearch/selectors";
import { deleteContact } from "../../redux/operations";
import {
  ContactLi,
  ContactWrapper,
  ContactInfoBlock,
  ContactDeleteBtn,
  ContactAvatar,
  ContactInfoName,
  ContactInfoTel,
  NoContactsFoundMsg,
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
              <ContactAvatar $avatar={avatar}></ContactAvatar>
              <ContactInfoBlock>
                <ContactInfoName>{name}</ContactInfoName>
                <ContactInfoTel>{phone}</ContactInfoTel>

                <hr />
              </ContactInfoBlock>
            </ContactWrapper>
            <ContactDeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <AiOutlineDelete size={20} />
            </ContactDeleteBtn>
          </ContactLi>
        ))
      ) : (
        <NoContactsFoundMsg>
          No contacts found on filter<span>{filter}</span>
        </NoContactsFoundMsg>
      )}
    </>
  );
}
