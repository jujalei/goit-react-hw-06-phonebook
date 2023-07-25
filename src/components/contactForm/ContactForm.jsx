import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FormWrap, FormInput, FormBtn } from './ContactForm.styled';

export function ContactForm({ onForm }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: phone,
    };
    onForm(contact);

    setPhone('');
    setName('');
  };

  return (
    <FormWrap>
      <label>
        <div>Name</div>
        <FormInput
          onChange={handleNameChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <div>Number</div>

        <FormInput
          onChange={handlePhoneChange}
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
        />
      </label>
      <FormBtn type="submit" onClick={handleSubmitForm}>
        Add contact
      </FormBtn>
    </FormWrap>
  );
}

ContactForm.propTypes = {
  onForm: PropTypes.func.isRequired,
};
