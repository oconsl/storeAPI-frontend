import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../slices/products'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Filter = () => {
  const [filters, setFilters] = useState({
    name: '',
    description: '',
    min: '0',
    max: '0'
  })
  const dispatch = useDispatch()

  const handleFiltersChange = (key) => (event) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: event.target.value
      }
    })
  }

  const handleClick = () => {
    dispatch(filterProducts(filters))
  }

  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        backgroundColor: 'rgba(108, 108, 108, 0.2)',
        backdropFilter: 'blur(15px)',
        boxShadow:
          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        padding: '1rem',
        borderRadius: '5px'
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        label='Name'
        variant='outlined'
        onChange={handleFiltersChange('name')}
      />
      <TextField
        label='Description'
        variant='outlined'
        onChange={handleFiltersChange('description')}
      />
      <TextField
        label='Min Price'
        variant='outlined'
        type='number'
        inputProps={{
          min: 0
        }}
        onChange={handleFiltersChange('min')}
      />
      <TextField
        label='Max Price'
        variant='outlined'
        type='number'
        inputProps={{
          min: 0
        }}
        onChange={handleFiltersChange('max')}
      />
      <Button
        variant='contained'
        onClick={handleClick}
        sx={{ width: '150px', height: '50px' }}
      >
        Filter
      </Button>
    </Box>
  )
}

export default Filter
