import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';
;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
})

