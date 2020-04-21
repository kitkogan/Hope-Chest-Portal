const form3Reducer = (state = [], action) => {
  switch (action.type) {
    case "POST_FORM3":
      return action.payload;
    default:
      return state;
  }
};

export default form3Reducer;
