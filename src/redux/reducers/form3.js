const form3 = (state = '', action) => {
    if(action.type === 'POST_3'){
        return state = action.payload;
    }
    if (action.type === "NEW_FEEDBACK") {
      state = '';
      return state;
    }
    return state
    }

    export default form3;