import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filterReducer,
  },
});
