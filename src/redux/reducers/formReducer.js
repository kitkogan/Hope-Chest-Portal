const formReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENT':
            return action.payload;
        case 'ADD_EVENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default formReducer;
  