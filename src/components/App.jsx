import { useEffect, useState } from 'react';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

import { Wrapper, MainTitle } from './App.styled';

const useLocalStorage = (key, value) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleSubmit = data => {
    for (const contact of contacts) {
      if (data.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${contact.name} "is already in contacts"`);
        return;
      }
    }

    setContacts([data, ...contacts]);
  };

  const handleSearch = e => setFilter(e.target.value);

  const handleFilterClear = e => setFilter('');

  const getContact = () => {
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filterContact.length === 0) {
      return contacts;
    }

    return filterContact;
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Wrapper>
      <MainTitle>Phone book</MainTitle>
      <ContactForm onForm={handleSubmit} />
      <ContactList
        contacts={getContact()}
        onDelete={deleteContact}
        searchName={filter}
        onSearch={handleSearch}
        clearFilter={handleFilterClear}
      />
    </Wrapper>
  );
}
