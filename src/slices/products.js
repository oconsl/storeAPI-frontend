import { createSlice } from '@reduxjs/toolkit'
import extraReducer from './extraReducers'

const initialState = {
  loading: true,
  data: [],
  filteredData: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    filterProducts: (state, { payload: filters }) => {
      const cleanFilters = {
        name: filters.name !== '' ? filters.name : undefined,
        description:
          filters.description !== '' ? filters.description : undefined,
        min: filters.min !== '' ? Number(filters.min) : 0,
        max:
          filters.max !== '' && filters.max !== '0'
            ? Number(filters.max)
            : undefined
      }

      state.filteredData = state.data.filter((product) => {
        let isValid = true

        if (cleanFilters['name'] !== undefined) {
          isValid =
            isValid && product.name.toLowerCase().includes(cleanFilters['name'])
        }

        if (cleanFilters['description'] !== undefined) {
          isValid =
            isValid &&
            product.description
              .toLowerCase()
              .includes(cleanFilters['description'])
        }

        if (cleanFilters['min'] !== 0) {
          isValid = isValid && product.price >= cleanFilters['min']
        }

        if (cleanFilters['max'] !== undefined) {
          isValid = isValid && product.price <= cleanFilters['max']
        }

        return isValid
      })
    }
  },
  extraReducers: extraReducer
})

export const { filterProducts } = productsSlice.actions

export default productsSlice.reducer
