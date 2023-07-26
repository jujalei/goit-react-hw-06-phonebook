import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';

import { Wrapper, MainTitle } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <MainTitle>Phone book</MainTitle>
      <ContactForm />
      <ContactList />
    </Wrapper>
  );
}
