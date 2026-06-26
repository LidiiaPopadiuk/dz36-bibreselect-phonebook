import { createSelector } from "@reduxjs/toolkit";
import { selectAll } from "../contacts/contactsSlice"; //selectEntities
import { useSelector } from "react-redux";
// export const getFind = (state) => {
//   return state.contacts.contacts.items.filter((contact) =>
//     contact.name.toUpperCase().includes(state.contacts.find.toUpperCase()),
//   );
// };

// export const selectItems = (state) => ;
export const selectFind = (state) => state.find;
export const selectFilter = createSelector(
  [selectAll, selectFind],
  (items, find) => {
    return items.filter((contacts) =>
      contacts.name.toUpperCase().includes(find.toUpperCase()),
    );
  },
);
