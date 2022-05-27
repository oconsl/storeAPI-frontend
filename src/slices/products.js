import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getProductsService,
  postProductService,
  putProductService,
  deleteProductService
} from '../services'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  getProductsService
)

export const postProduct = createAsyncThunk(
  'products/postProduct',
  postProductService
)

export const putProduct = createAsyncThunk(
  'products/putProduct',
  putProductService
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  deleteProductService
)

const initialState = {
  loading: true,
  error: '',
  data: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    filterProducts: (state, action) => {}
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true
      state.error = ''
    },
    [getProducts.fulfilled]: (state, { payload: data }) => {
      state.loading = false
      state.data = data
      state.error = ''
    },
    [getProducts.rejected]: (state, { payload: error }) => {
      state.loading = false
      state.error = error
    },
    [postProduct.pending]: (state) => {
      state.loading = true
      state.error = ''
    },
    [postProduct.fulfilled]: (state, { payload: product }) => {
      state.loading = false
      state.data.push(product)
      state.error = ''
    },
    [postProduct.rejected]: (state, { payload: error }) => {
      state.loading = false
      state.error = error
    },
    [putProduct.pending]: (state) => {
      state.loading = true
      state.error = ''
    },
    [putProduct.fulfilled]: (state, { payload: product }) => {
      state.loading = false
      state.data = state.data.map((item) =>
        item.id === product.id ? product : item
      )
      state.error = ''
    },
    [putProduct.rejected]: (state, { payload: error }) => {
      state.loading = false
      state.error = error
    },
    [deleteProduct.pending]: (state) => {
      state.loading = true
      state.error = ''
    },
    [deleteProduct.fulfilled]: (state, { payload: id }) => {
      state.loading = false
      state.data = state.data.filter((item) => item.id !== id)
      state.error = ''
    },
    [deleteProduct.rejected]: (state, { payload: error }) => {
      state.loading = false
      state.error = error
    }
  }
})

export const { filterProducts } = productsSlice.actions

export default productsSlice.reducer
