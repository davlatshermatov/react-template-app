import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const getAllPost = () =>
  apiCall({
    url: "/posts",
    method: "get",
    onSuccess: postSlice.actions.setAllPosts.type,
  });

/**
 * You can add more reducers to the postSlice
 */

export default postSlice.reducer;
