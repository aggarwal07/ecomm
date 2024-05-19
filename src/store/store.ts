import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products'
import authReducer from './slices/auth';
import cartReducer from './slices/cart';

export const store = configureStore({
  reducer: {
    product: productsReducer,
    auth: authReducer,
    isCartOpen : cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch