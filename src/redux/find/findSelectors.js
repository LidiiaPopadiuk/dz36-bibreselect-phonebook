import { createSelector } from "@reduxjs/toolkit";
// export const getFind = (state) => {
//   return state.contacts.contacts.items.filter((contact) =>
//     contact.name.toUpperCase().includes(state.contacts.find.toUpperCase()),
//   );
// };

export const selectItems = (state) => state.contacts.contacts.items;
export const selectFind = state => state.contacts.find
export const selectFilter = createSelector([selectItems, selectFind], (items, find) => {
  return items.filter((contacts) =>
    contacts.name.toUpperCase().includes(find.toUpperCase()),
  );
});
