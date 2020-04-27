const form3Reducer = (state = [], action) => {
  switch (action.type) {
    case "POST_FORM3":
      return action.payload;
      case 'SET_STORED_IMAGES':
        return state = action.payload;
    default:
      return state;
  }
};

export default form3Reducer;
