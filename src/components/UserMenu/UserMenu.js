import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutBtn } from './UserMenu.styled';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
      <span
        style={{
          borderRadius: '7px',
          backgroundColor: '#4c3ec4',
          color: 'black',
          fontSize: '20px',
          fontWeight: '400',
          padding: '8px',
          margin: '20px auto',
        }}
      >
        Welcome, {user.name}
      </span>
    </div>
  );
};
