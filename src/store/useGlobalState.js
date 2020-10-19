import { useState } from "react";

const initialState = {
  input: null,
  auth: {
    user: null,
    token: null,
    role: null,
  },
  data: null,
};

const useGlobalState = () => {
  const [state, setState] = useState(initialState);

  const action = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      default:
        return state;
    }
  };
  return { state, action };
};

export default useGlobalState;
