// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactsList/ContactList';
import { ContactFilter } from 'components/ContactsFilter/ContactFilter';

export default function Contacts() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <>
      <ContactFilter />
      <ContactList />
    </>
  );
}
