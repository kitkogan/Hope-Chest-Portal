const newReducer = (state = {edit:false}, action) => {
    switch (action.type) {
        case "TOGGLE_EDIT":
          return state = {...state, edit:!state.edit};
        default:
          return state;
      }
    };

export default newReducer;
  