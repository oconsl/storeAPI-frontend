import axios from 'axios'

// PRODUCTS SERVICES

// GET ALL PRODUCTS
export const getProductsService = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}`)

  console.log(response)

  return response.data
}

// POST PRODUCT
export const postProductService = async ({ data }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}`, data)

    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}

// PUT PRODUCT
export const putProductService = async ({ data, id }, { rejectWithValue }) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/${id}`,
      data
    )

    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}

// DELETE PRODUCT
export const deleteProductService = async ({ id }) => {
  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)

  return response.data
}
