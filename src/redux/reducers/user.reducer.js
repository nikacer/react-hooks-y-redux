import { UPDATE_NAME } from "../action/user.action";

const initialState = { name: "nicolas" };

function user(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

export default user;
