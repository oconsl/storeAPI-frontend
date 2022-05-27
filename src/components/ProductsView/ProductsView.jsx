import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../slices/products'
import Pagination from '@mui/material/Pagination'
import ProductCard from '../ProductCard/ProductCard'
import { Box } from '@mui/material'

const ProductsView = () => {
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const [productsGroups, setProductsGroups] = useState([[]])
  const dispatch = useDispatch()
  const productsArray = useSelector((state) => state.products.data)
  const navigate = useNavigate()

  const handleChange = (_, value) => {
    setPage(() => value)
  }

  useEffect(() => {
    const splitArrayIntoSubArrays = () => {
      let subArray = []
      let i = 0

      while (i < productsArray.length) {
        subArray.push(productsArray.slice(i, (i += 8)))
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
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        {productsArray.length !== 0 && productsGroups.length > 0
          ? productsGroups[page - 1].map((product) => {
              return <ProductCard key={product._id} product={product} />
            })
          : null}
      </Box>
      <Pagination
        count={maxPage}
        onChange={handleChange}
        variant='outlined'
        shape='rounded'
        color={'primary'}
      />
    </>
  )
}

export default ProductsView
