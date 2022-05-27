import React, { useState } from 'react'
import {
  CssBaseline,
  Box,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  Button,
  TextField,
  Typography
} from '@mui/material'

const ProductForm = ({ setOpen }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    description: '',
    imageUrl: ''
  })

  const handleProductDataChange = (key) => (event) => {
    setProductData((prev) => {
      return {
        ...prev,
        [key]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // SEND DATA HERE
    setOpen(() => false)
  }

  return (
    <Box component='main'>
      <CssBaseline />
      <Box>
        <Box>
          <Typography component='h1' variant='h5'>
            New Testimony
          </Typography>
        </Box>
        <Box
          component='form'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
          required
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='name'
                  id='name'
                  label='Product Name'
                  onChange={handleProductDataChange('name')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={10}
                  name='description'
                  id='description'
                  label='Description'
                  onChange={handleProductDataChange('description')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={10}
                  name='price'
                  id='price'
                  label='Price'
                  onChange={handleProductDataChange('price')}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Box>
              <TextField
                required
                fullWidth
                name='image'
                id='image'
                label='Product Image URL'
                onChange={handleProductDataChange('imageUrl')}
              />
              <Card>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='New Pet Image'
                    image={productData.imageUrl}
                    title='New Pet Image'
                    height='450'
                  />
                </CardActionArea>
              </Card>
            </Box>
            <Button type='submit' fullWidth variant='contained'>
              Add Product
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductForm
