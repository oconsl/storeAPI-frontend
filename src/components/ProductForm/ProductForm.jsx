import React, { useEffect, useState } from 'react'
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
import { closeModal } from '../../slices/modal'
import { postProduct, putProduct, getProducts } from '../../slices/products'
import { useDispatch, useSelector } from 'react-redux'

const ProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    description: '',
    imageUrl: ''
  })
  const dispatch = useDispatch()
  const type = useSelector((state) => state.modal.type)
  const selectedId = useSelector((state) => state.modal.selectedId)
  const products = useSelector((state) => state.products.data)
  const product = products.find((product) => product._id === selectedId)

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

    if (type === 'add') {
      dispatch(postProduct({ data: productData }))
        .then(() => dispatch(getProducts()))
        .then(() => dispatch(closeModal()))
    } else {
      dispatch(putProduct({ data: productData, id: product._id }))
        .then(() => dispatch(getProducts()))
        .then(() => dispatch(closeModal()))
    }
  }

  useEffect(() => {
    if (product) {
      setProductData(() => {
        return {
          name: product.name,
          price: product.price,
          description: product.description,
          imageUrl: product.imageUrl
        }
      })
    }
  }, [product])

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
                  value={productData.name}
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
                  value={productData.description}
                  onChange={handleProductDataChange('description')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  name='price'
                  id='price'
                  label='Price'
                  value={productData.price}
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
                value={productData.imageUrl}
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
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductForm
