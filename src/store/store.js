import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slices/products'
import modalReducer from '../slices/modal'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer
  }
})
