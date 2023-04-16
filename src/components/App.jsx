import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { AddNewContact } from '../Pages/CreateNewContact';
import Contacts from '../Pages/Contacts';
import { Route, Routes } from 'react-router-dom';
// import Navigation from './Navigation/Navigation';
import Home from 'Pages/Home';

import Register from 'Pages/Register';
import Login from 'Pages/Login';
import { Layout } from './Loyout/Layout';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add_contact" element={<AddNewContact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
