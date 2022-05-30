import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  getProductsService,
  postProductService,
  putProductService,
  deleteProductService
} from '../../services'

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

const extraReducer = (builder) => {
  for (const action of [getProducts, postProduct, putProduct, deleteProduct]) {
    builder.addCase(action.pending, (state) => {
      state.loading = true
    })
    builder.addCase(action.rejected, (state) => {
      state.loading = false
    })
  }

  builder.addCase(getProducts.fulfilled, (state, { payload: data }) => {
    state.loading = false
    state.data = data
    state.filteredData = data
  })

  builder.addCase(postProduct.fulfilled, (state, { payload: product }) => {
    state.loading = false
    state.data.push(product)
    state.filteredData.push(product)
  })

  builder.addCase(putProduct.fulfilled, (state, { payload: product }) => {
    state.loading = false
    state.data = state.data.map((item) =>
      item.id === product.id ? product : item
    )
    state.filteredData = state.filteredData.map((item) =>
      item.id === product.id ? product : item
    )
  })

  builder.addCase(deleteProduct.fulfilled, (state, { payload: id }) => {
    state.loading = false
    state.data = state.data.filter((item) => item.id !== id)
    state.filteredData = state.filteredData.filter((item) => item.id !== id)
  })
}

export default extraReducer
