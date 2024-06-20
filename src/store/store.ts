import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products'
// import authReducer from './slices/auth';
import cartReducer from './slices/cart';
import addressReducer from './slices/checkout';
import tabSelectedReducer from './slices/TabSelected';

export const store = configureStore({
  reducer: {
    product: productsReducer,
    // auth: authReducer,
    cart : cartReducer,
    address : addressReducer,
    tabSelected: tabSelectedReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch