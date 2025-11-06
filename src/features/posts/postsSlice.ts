import { Post, PostComment, PostsState } from "@/interfaces/post";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PostsState = {
  list: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.list = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.list.unshift(action.payload);
    },
    addComment: (
      state,
      action: PayloadAction<{ postId: number; comment: PostComment }>
    ) => {
      const post = state.list.find((p) => p.id === action.payload.postId);
      if (post) {
        if (!post.comments) post.comments = [];
        post.comments.push(action.payload.comment);
      }
    },
  },
});

export const { setPosts, addPost, addComment } = postsSlice.actions;
export default postsSlice.reducer;
