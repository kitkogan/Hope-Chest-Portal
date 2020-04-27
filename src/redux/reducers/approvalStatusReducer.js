
const approvalStatusReducer = (state = "", action) => {
  console.log("in tasksTableReducer");
  switch (action.type) {
    case "SET_STATUS":
      return action.payload;
    default:
      return state;
  }
};

export default approvalStatusReducer;

