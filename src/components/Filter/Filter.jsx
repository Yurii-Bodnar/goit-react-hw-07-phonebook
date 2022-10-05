import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <input
        className={css.inputFilter}
        onChange={(e)=>dispatch(filterContacts(e.target.value))}
        type="text"
        name="filter"
        value={filter}
      />
    </div>
  );
};

export default Filter;
