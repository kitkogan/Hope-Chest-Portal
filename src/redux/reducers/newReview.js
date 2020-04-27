const newReducer = (state = {edit:false}, action) => {
    console.log('XXXXXXX in NEW review reducer', action.payload);
    switch (action.type) {
        case "TOGGLE_EDIT":
          return state = {...state, edit:!state.edit};
        default:
          return state;
      }
    };

export default newReducer;
  