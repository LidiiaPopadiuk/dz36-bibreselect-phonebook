export const getFind = (state) => {
  return state.contacts.filter((contact) =>
    contact.name.toUpperCase().includes(state.find.toUpperCase()),
  );
};
