import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../filter/Filter';

import { getContact, getFilter } from 'redux/selectors';

import { deleteContact } from 'redux/contactSlice';

import {
  SubTitle,
  ContactsList,
  ListItem,
  DeleteBtn,
} from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts =
    Array.isArray(contacts) && typeof filter === 'string'
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];

  return (
    <div>
      <div>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactsList>
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <ListItem key={contact.id}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <DeleteBtn
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(contact.id));
                  }}
                ></DeleteBtn>
              </ListItem>
            ))
          ) : (
            <ListItem>No contacts found</ListItem>
          )}
        </ContactsList>
      </div>
    </div>
  );
}
