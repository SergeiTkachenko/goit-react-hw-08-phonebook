import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LabelFormStyled, LogInBtn, LoginFormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelFormStyled>
        Email
        <input type="email" name="email" />
      </LabelFormStyled>
      <LabelFormStyled>
        Password
        <input type="password" name="password" />
      </LabelFormStyled>
      <LogInBtn type="submit">Log In</LogInBtn>
    </LoginFormStyled>
  );
};
