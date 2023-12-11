import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from '../redux/reducer'

// Tworze magazyn za pomocą configureStore i przekazu mu obiekt konfiguracyjny. 'reducer' to miejsce, gdzie przypisuje różne reduktory do odpowiadających im części stanu
// Tutaj są to 2 sklucze: contacts i filter, z którymi są związane odpowiednie reduktory.
export const store = configureStore ({
    reducer: {
        // contactReducer obsługuje akcje dodawania nowych kontaktów (addContact) oraz usuwania istniejących kontaktów (removeContact). Stan tej części reduktora to lista kontaktów
        contacts: contactReducer, 
        // filterReducer zarządza stanem filtru, który może być używany do filtrowania listy kontaktów na podstawie wprowadzanego przez użytkownika tekstu
        filter: filterReducer,
    }    
})

// configureStore pochodzi z Redux Toolkit i jest specjalnie dostosowana do ułatwienia konfiguracji Redux w aplikacjach. Zastępuje ona bardziej rozbudowaną konfigurację