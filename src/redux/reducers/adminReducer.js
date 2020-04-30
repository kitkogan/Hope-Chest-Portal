const adminReducer = (state = [], action) => {
  console.log(' !!!!!!!!! in adminReducer with', action.payload)
    switch (action.type) {
      case "SET_ADMIN":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default adminReducer;