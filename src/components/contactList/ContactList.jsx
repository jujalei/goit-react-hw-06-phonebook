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

  const filteredContacts = contacts.filter(contact => {
    if (typeof filter === 'string') {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return true;
  });

  return (
    <div>
      <div>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        {filteredContacts.length > 0 ? (
          <ContactsList>
            {filteredContacts.map(contact => {
              return (
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
              );
            })}
          </ContactsList>
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
}
