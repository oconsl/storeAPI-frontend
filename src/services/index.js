import axios from 'axios'

// PRODUCTS SERVICES

// GET ALL PRODUCTS
export const getProductsService = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}`)

  return response.data
}

// POST PRODUCT
export const postProductService = async ({ data }) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}`, data)

  return response.data
}

// PUT PRODUCT
export const putProductService = async ({ data, id }) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}/${id}`,
    data
  )

  return response.data
}

// DELETE PRODUCT
export const deleteProductService = async ({ data, id }) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}/${id}`,
    data
  )

  return response.data
}
