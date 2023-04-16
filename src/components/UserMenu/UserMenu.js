import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutBtn } from './UserMenu.styled';
// import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <div>
      {/* <p>Welcome, {user.name}</p> */}

      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogoutBtn>
    </div>
  );
};
