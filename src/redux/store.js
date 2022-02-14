import { configureStore } from "@reduxjs/toolkit";
import language from "./language/language";
import api from "./middleware/apiMiddleware";
import post from "./post/post";

export default configureStore({
  reducer: {
    languageReducer: language,
    postReducer: post,
  },
  middleware: [api],
});
