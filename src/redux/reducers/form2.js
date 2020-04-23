const form2 = (state = '', action) => {
    if(action.type === 'POST_2'){
        return state = action.payload;
    }
    if (action.type === "NEW_FEEDBACK") {
      state = '';
      return state;
    }
    return state
    }

    export default form2;