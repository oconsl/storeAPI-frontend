import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Filter = () => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='outlined-basic' label='Name' variant='outlined' />
      <TextField id='outlined-basic' label='Description' variant='outlined' />
      <TextField id='outlined-basic' label='Min Price' variant='outlined' />
      <TextField id='outlined-basic' label='Max Price' variant='outlined' />
      <Button variant='contained'>Filter</Button>
    </Box>
  )
}

export default Filter
