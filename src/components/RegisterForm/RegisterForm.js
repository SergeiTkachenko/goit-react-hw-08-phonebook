import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegistrationFormStyled,
  RegistrationLabelStyled,
  RegitrationBtn,
} from './RegisnerForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegistrationFormStyled onSubmit={handleSubmit} autoComplete="off">
      <RegistrationLabelStyled>
        Username
        <input type="text" name="name" />
      </RegistrationLabelStyled>
      <RegistrationLabelStyled>
        Email
        <input type="email" name="email" />
      </RegistrationLabelStyled>
      <RegistrationLabelStyled>
        Password
        <input type="password" name="password" />
      </RegistrationLabelStyled>
      <RegitrationBtn type="submit">Registration</RegitrationBtn>
    </RegistrationFormStyled>
  );
};
