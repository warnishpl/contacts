export function contactsListReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "EDIT":
      return state.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
    case "DELETE":
      return state.filter((contact) => contact.id !== action.payload);
    case "SET_ALL":
      return action.payload;
    default:
      return state;
  }
}
