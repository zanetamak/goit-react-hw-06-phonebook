import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, setFilter } from './actions';

const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = storedContacts ? JSON.parse(storedContacts) : [];
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, (builder) => {
  builder
    .addCase(addNewContact, (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    })
    .addCase(deleteContact, (state, action) => {
      const newState = state.filter((contact) => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    });
});

export const filterReducer = createReducer(filterInitialState, (builder) => {
  builder
    .addCase(setFilter, (_, action) => {
      return action.payload; // Zakładam, że setFilter bezpośrednio ustawia nową wartość filtra
    });
});

// add.Case uzywane jako nowy styl w obiekcie builder

// '_' jest używane jako zmienna zastępcza dla pierwszego parametru (stanu). Jest to powszechna konwencja, gdy nie zamierzamy używać tego parametru wewnątrz funkcji. 
// W ten sposób możemy zignorować go podczas implementacji, jednocześnie zachowując wymaganą kolejność parametrów.