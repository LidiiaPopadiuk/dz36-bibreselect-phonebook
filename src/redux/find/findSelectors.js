export const getFind = (state) => {
  return state.contacts.contacts.items.filter((contact) =>
    contact.name.toUpperCase().includes(state.contacts.find.toUpperCase()),
  );
};
