import React, { useEffect, useState } from 'react'
import {
  CssBaseline,
  Box,
  Grid,
  Card,
  CardMedia,
  Button,
  TextField,
  Typography
} from '@mui/material'
import { closeModal } from '../../slices/modal'
import {
  postProduct,
  putProduct,
  getProducts
} from '../../slices/extraReducers'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import noImg from '../../assets/no-product-image.jpg'
import './ProductForm.css'

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
  const product = products.find((product) => product?._id === selectedId)

  const handleProductDataChange = (key) => (event) => {
    setProductData((prev) => {
      return {
        ...prev,
        [key]: event.target.value
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (type === 'add') {
      dispatch(postProduct({ data: productData })).then((res) => {
        if (res.error) {
          toast.error(`Error: ${res.payload.cause}`)
        } else {
          toast.success('Product added successfully!')
          dispatch(getProducts()).then(() => dispatch(closeModal()))
        }
      })
    } else {
      dispatch(putProduct({ data: productData, id: product._id })).then(
        (res) => {
          if (res.error) {
            toast.error(`Error: ${res.payload.cause}`)
          } else {
            toast.success('Product updated successfully!')
            dispatch(getProducts()).then(() => dispatch(closeModal()))
          }
        }
      )
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
    <Box component='main' className='form__main'>
      <CssBaseline />
      <Box>
        <Box className='form__title'>
          <Typography component='h1' variant='h2'>
            {type === 'add' ? 'New Product' : 'Update product'}
          </Typography>
        </Box>
        <Box
          component='form'
          onSubmit={handleSubmit}
          required
          className='form__box'
        >
          <Box className='form__box-left'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='name'
                  id='name'
                  label='Product Name'
                  helperText={'Letter, numbers and spaces.'}
                  inputProps={{
                    pattern: '^[0-9a-zA-Z\u00C0-\u00FF\\s]+$'
                  }}
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
                  helperText={'Field required. All characters allowed.'}
                  value={productData.description}
                  onChange={handleProductDataChange('description')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  name='price'
                  id='price'
                  label='Price'
                  inputProps={{
                    min: 0,
                    pattern: '^[0-9]+$'
                  }}
                  helperText={'Only number greater than 0.'}
                  value={productData.price}
                  onChange={handleProductDataChange('price')}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='success'
              className='form__submit'
            >
              {type === 'add' ? 'ADD PRODUCT' : 'UPDATE PRODUCT'}
            </Button>
          </Box>
          <Box className='form__box-right'>
            <Box>
              <TextField
                required
                fullWidth
                name='image'
                id='image'
                label='Product Image URL'
                value={productData.imageUrl}
                helperText={'Paste an image URL.'}
                onChange={handleProductDataChange('imageUrl')}
              />
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(108, 108, 108, 0.2)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <CardMedia
                  component='img'
                  alt='Product Image'
                  image={productData.imageUrl || 'a'}
                  title='Product Image'
                  height='450'
                  sx={{
                    padding: '1rem',
                    width: '450px',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onError={(e) => {
                    e.target.src = noImg
                  }}
                />
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductForm
