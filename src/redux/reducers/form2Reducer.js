const form2Reducer = (state = [], action) => {
  switch (action.type) {
    case "POST_FORM2":
      return action.payload;
    default:
      return state;
  }
};

export default form2Reducer;
