export default function ReducerAction(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUB": {
      if (state > 0) return state - action.payload;
    }
    default: {
      return state;
    }
  }
}
