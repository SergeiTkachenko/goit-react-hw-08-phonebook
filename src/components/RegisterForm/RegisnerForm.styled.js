import styled from 'styled-components';

export const RegistrationFormStyled = styled.form`
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
  flex-direction: column;

  justify-content: center;

  margin: 20px;

  font-weight: 600;
  padding: 10px;
  border-radius: 6px;
  color: black;
  text-transform: uppercase;
`;

export const RegistrationLabelStyled = styled.label`
  text-align: center;

  justify-content: center;
  display: flex;
  width: 300px;
  gap: 6px;
  flex-direction: column;
  padding: 10px;
  margin: 10px auto;

  border-radius: 10px;
  background-color: #4c3ec4;
`;

export const RegitrationBtn = styled.button`
  text-decoration: none;
  cursor: pointer;

  margin-bottom: 20px;

  border: 0px solid transparent;
  font-weight: bold;
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 6px;
  color: black;
  background-color: #3bb4fa;
  text-transform: uppercase;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    /* display: flex; */
    flex-wrap: wrap;

    padding: 10px 20px;
  }

  &.active {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }

  &:hover,
  &:focus {
    color: white;
    background-color: #3460da;
    box-shadow: rgba(45, 78, 224, 0.25) 0px 10px 20px 10px,
      rgba(12, 63, 231, 0.3) 0px 10px 7px -2px;
  }
`;
