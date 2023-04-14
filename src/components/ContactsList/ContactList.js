// import { Component } from 'react';

import { useEffect } from 'react';
import { ContactItem } from '../ContactItem/ContsctItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactListStyled } from './ContactList.Styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ContactListStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ContactListStyled>
    </div>
  );
};
