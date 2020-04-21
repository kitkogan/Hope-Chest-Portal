const formReducer = (state = [], action) => {
    switch (action.type) {
      case "POST_FORM1":
        return action.payload;
      default:
        return state;
    }
}

export default formReducer;
  