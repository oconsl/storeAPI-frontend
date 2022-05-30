import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { openEditModal, openDetailsModal } from '../../slices/modal'
import { deleteProduct, getProducts } from '../../slices/extraReducers'
import { toast } from 'react-hot-toast'
import noImg from '../../assets/no-product-image.jpg'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleEditClick = () => {
    dispatch(openEditModal(product._id))
  }

  const handleDetailsClick = () => {
    dispatch(openDetailsModal(product._id))
  }

  const handleDeleteClick = () => {
    dispatch(
      deleteProduct({
        id: product._id
      })
    ).then(() => dispatch(getProducts()))

    toast.success('Successfully deleted!')
  }

  return (
    <Card className='card'>
      <CardContent>
        <CardActionArea onClick={handleDetailsClick}>
          <Box className='card__container-top'>
            <CardMedia
              component='img'
              alt='product'
              className='card__image'
              height='200'
              image={product.imageUrl}
              onError={(e) => {
                e.target.src = noImg
              }}
            />
          </Box>
          <Box className='card__container-bottom'>
            <Typography gutterBottom variant='h5' component='div'>
              {product.name}
            </Typography>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
            >{`$ ${product.price}`}</Typography>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            {product.description}
          </Typography>
        </CardActionArea>
      </CardContent>
      <CardActions>
        <Box className='card__actions'>
          <Button
            size='small'
            color='success'
            variant='outlined'
            onClick={handleEditClick}
          >
            Edit
          </Button>
          <Button
            size='small'
            color='error'
            variant='outlined'
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProductCard
