import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './slices/units'
import productsReducer from './slices/products'

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    product: productsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch