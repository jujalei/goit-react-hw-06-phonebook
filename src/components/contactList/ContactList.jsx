import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../filter/Filter';

import { getContact } from 'redux/selectors';

import { deleteContact } from 'redux/contactSlice';

import {
  SubTitle,
  ContactsList,
  ListItem,
  DeleteBtn,
} from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContact);
  console.log('conTActs :>> ', contacts);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts?.length > 0 && (
        <div>
          <SubTitle>Contacts</SubTitle>
          <Filter />
          <ContactsList>
            {contacts.map(contact => {
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
        </div>
      )}
    </div>
  );
}
