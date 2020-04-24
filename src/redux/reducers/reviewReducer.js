const reviewReducer = (state = [], action) => {
    console.log('in review reducer', action.payload);
    
    switch (action.type) {
        case "DISPLAY_FORM":
          return action.payload;
        default:
          return state;
      }
    };

export default reviewReducer;
  