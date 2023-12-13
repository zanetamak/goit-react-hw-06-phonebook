
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';

import css from './Filter.module.css'

export const Filter = () => {
  //  zadaniem useDispatch jest umożliwienie komponentowi wysyłania akcji do Redux Store za pomocą 
  // funkcji dispatch. Akcje są obiektami zawierającymi informacje o tym, co powinno się zmienić 
  // w stanie aplikacji.
  const dispatch = useDispatch();

  const onChange = (e) => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
    //  // Wysłanie akcji setFilter z nowym filtrem do Redux Store
  };
  
    return (
      <>
        <div className={css.filterContacts}>
      <label >Find contacts by name or phone number</label>
          <input className={css.filterInput} type="text" name="filter" onChange={onChange} />
          </div>
    </>
  );
};

export default Filter
