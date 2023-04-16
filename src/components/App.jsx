import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { AddNewContact } from '../Pages/CreateNewContact';
import Contacts from '../Pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home';

import Register from 'Pages/Register';
import Login from 'Pages/Login';
import { Layout } from './Loyout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="/add_contact" element={<AddNewContact />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
