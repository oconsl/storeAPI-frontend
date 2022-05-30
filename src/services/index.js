import axios from 'axios'

// PRODUCTS SERVICES
const API_URL = 'https://aenima-api-oconsl.herokuapp.com/api/products'

// GET ALL PRODUCTS
export const getProductsService = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

// POST PRODUCT
export const postProductService = async ({ data }, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, data)

    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}

// PUT PRODUCT
export const putProductService = async ({ data, id }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data)

    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}

// DELETE PRODUCT
export const deleteProductService = async ({ id }) => {
  const response = await axios.delete(`${API_URL}/${id}`)

  return response.data
}
