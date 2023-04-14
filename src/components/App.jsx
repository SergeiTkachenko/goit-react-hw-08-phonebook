import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { AddNewContact } from './Pages/CreateNewContact';
import Contacts from './Pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Pages/Home';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add_contact" element={<AddNewContact />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Layout>
  );
};
