import { createReducer } from 'reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = storedContacts ? JSON.parse(storedContacts) : [];
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        const newState = [...state, action.payload]; // action payload daje dostęp do przekazanych danych
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;
        //   nowy stan (newState) w lokalnym magazynie przeglądarki pod kluczem 'contacts'. Dzięki temu, po odświeżeniu strony 
        // lub ponownym otwarciu przeglądarki, aplikacja może wczytać ostatni zapisany stan.   // 
    },
    [deleteContact]: (state, action) => {
        const newState = state.filter(contact => contact.id !== action.payload);
        localStorage.setItem('contacts', JSON.stringify(newState));
        return newState;

    },
})

export const filterReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => {
        return [...state, action.payload];
    }
});