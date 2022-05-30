import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../slices/extraReducers'
import Pagination from '@mui/material/Pagination'
import ProductCard from '../ProductCard/ProductCard'
import { Box, Typography } from '@mui/material'

const ProductsView = () => {
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const dispatch = useDispatch()
  const productsArray = useSelector((state) => state.products.filteredData)
  const [productsGroups, setProductsGroups] = useState([[]])
  const navigate = useNavigate()

  const handleChange = (_, value) => {
    setPage(() => value)
  }

  useEffect(() => {
    const splitArrayIntoSubArrays = () => {
      let subArray = []
      let i = 0

      while (i < productsArray.length) {
        subArray.push(productsArray.slice(i, (i += 4)))
      }

      return subArray
    }

    const subArray = splitArrayIntoSubArrays()

    setProductsGroups(() => subArray)
    setMaxPage(() => subArray.length)
  }, [productsArray])

  useEffect(() => {
    navigate(`/${page}`)
  }, [page, navigate])

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Pagination
        count={maxPage}
        onChange={handleChange}
        variant='outlined'
        shape='rounded'
        color={'primary'}
      />
      <Box
        sx={{
          display: 'flex',
          gap: '4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          justifySelf: 'center'
        }}
      >
        {productsArray.length !== 0 && productsGroups.length > 0 ? (
          productsGroups[page - 1].map((product, index) => {
            return (
              <ProductCard key={`${product.name}-${index}`} product={product} />
            )
          })
        ) : (
          <Box>
            <Typography variant='h4'>No products found</Typography>
          </Box>
        )}
      </Box>
    </>
  )
}

export default ProductsView
