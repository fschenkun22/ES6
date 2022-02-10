import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
  reducer: {
    posts:postsReducer,
    users:usersReducer,
    counter:counterReducer
  },
});
