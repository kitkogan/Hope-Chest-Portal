const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case "DISPLAY_FORM":
          return action.payload;
        default:
          return state;
      }
    };

export default reviewReducer;
  