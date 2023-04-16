import { Filter } from './ContactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const ContactFilter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <Filter>
      <h3>Find contact by name</h3>

      <input type="text" value={value} onChange={handleSetFilter} />
    </Filter>
  );
};
