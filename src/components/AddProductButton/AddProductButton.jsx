import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { openAddModal } from '../../slices/modal'

const AddProductButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openAddModal())
  }

  return (
    <Box>
      <Button variant='contained' color='success' onClick={handleClick}>
        ADD
      </Button>
    </Box>
  )
}

export default AddProductButton
