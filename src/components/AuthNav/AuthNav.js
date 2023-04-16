import { NavLinkListStyled, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavLinkListStyled>
      <NavLinkStyled to="/register">
        <h2>Registeration</h2>
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        <h2>Log In</h2>
      </NavLinkStyled>
    </NavLinkListStyled>
  );
};
