import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../../components/Filter/Filter'
import ProductsView from '../../components/ProductsView/ProductsView'
import { Typography } from '@mui/material'
import Modal from '../../components/Modal/Modal'
import AddProductButton from '../../components/AddProductButton/AddProductButton'

const MainPage = () => {
  const modalOpen = useSelector((state) => state.modal.open)

  return (
    <>
      {modalOpen && <Modal />}
      <Typography variant='h2' component='h2'>
        Products
      </Typography>
      <AddProductButton />
      <Filter />
      <ProductsView />
    </>
  )
}

export default MainPage
