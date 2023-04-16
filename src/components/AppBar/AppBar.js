// import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLinkListStyled } from './AppBar.styled';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <NavLinkListStyled>
        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <AuthNav />
        <UserMenu />
      </NavLinkListStyled>
    </header>
  );
};
