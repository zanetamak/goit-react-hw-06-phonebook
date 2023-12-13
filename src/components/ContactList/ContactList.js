import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/actions';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  //  bez selektora getContacts byłoby tak ((state) => state.contacts)

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    // usunięcie kontaktu z uzyciem parametru id
  };

  return (
    <div className={css.contacts}>
      <p>Find contact by name</p>
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactsItem} key={id}>
            <p className={css.contactsName}>{name}</p>
            <p className={css.contactsNumber}>{number}</p>
            <button
              onClick={() => {
                handleDeleteContact(id);
              }}
              className={css.contactsBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;