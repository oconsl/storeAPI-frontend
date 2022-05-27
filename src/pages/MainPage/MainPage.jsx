import React from 'react'
import Filter from '../../components/Filter/Filter'
import ProductsView from '../../components/ProductsView/ProductsView'
import { Typography } from '@mui/material'

const MainPage = () => {
  return (
    <>
      <Typography variant='h2' component='h2'>
        Products
      </Typography>
      <Filter />
      <ProductsView />
    </>
  )
}

export default MainPage
