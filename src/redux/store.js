import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { findReducer } from "./find/findSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        find: findReducer,
    }
})

