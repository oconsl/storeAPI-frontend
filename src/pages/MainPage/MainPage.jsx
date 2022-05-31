import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../../components/Filter/Filter'
import ProductsView from '../../components/ProductsView/ProductsView'
import { CssBaseline, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Modal from '../../components/Modal/Modal'
import AddProductButton from '../../components/AddProductButton/AddProductButton'
import { Toaster } from 'react-hot-toast'
import './MainPage.css'

const MainPage = () => {
  const modalOpen = useSelector((state) => state.modal.open)

  return (
    <Box className='main'>
      <CssBaseline />
      {modalOpen && <Modal />}
      <Typography variant='h2' component='h2' className='title'>
        Products
      </Typography>
      <AddProductButton />
      <Box className='filter__container'>
        <Filter />
      </Box>
      <Box className='products__view'>
        <ProductsView />
      </Box>
      <Toaster position='top-center' reverseOrder={false} />
    </Box>
  )
}

export default MainPage
