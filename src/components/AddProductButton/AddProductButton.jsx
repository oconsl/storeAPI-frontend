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
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Button
        variant='contained'
        color='success'
        onClick={handleClick}
        sx={{
          width: '150px',
          height: '50px'
        }}
      >
        ADD
      </Button>
    </Box>
  )
}

export default AddProductButton
