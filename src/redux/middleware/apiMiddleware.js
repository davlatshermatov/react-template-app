import axios from "axios";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== "API_CALL") {
      next(action);
      return;
    }

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    axios({
      baseURL: "https://jsonplaceholder.typicode.com", // TODO: move to config ,  you can change this to your own api
      url,
      method,
      data,
    })
      .then((response) => {
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: onError,
          payload: error.data,
        });
      });
  };

export default apiMiddleware;
