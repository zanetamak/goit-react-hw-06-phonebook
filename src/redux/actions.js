import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact');
export const deleteContact = createAction('contact/deleteContact');
export const setFilter = createAction('contact/setFilter');