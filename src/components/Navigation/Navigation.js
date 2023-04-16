import { useAuth } from 'hooks';
import { NavLinkListStyled, NavLinkStyled } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <NavLinkListStyled>
        <NavLinkStyled to="/">
          <h2>Home</h2>
        </NavLinkStyled>
        {isLoggedIn && (
          <>
            <NavLinkStyled to="/contacts">
              <h2>Phonebook</h2>
            </NavLinkStyled>
            <NavLinkStyled to="/add_contact">
              <h2>Add new contact</h2>
            </NavLinkStyled>
          </>
        )}
      </NavLinkListStyled>
    </div>
  );
}
