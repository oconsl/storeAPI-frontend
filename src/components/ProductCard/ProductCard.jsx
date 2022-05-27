import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { openEditModal } from '../../slices/modal'
import { deleteProduct, getProducts } from '../../slices/products'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleEditClick = () => {
    dispatch(openEditModal(product._id))
  }

  const handleDeleteClick = () => {
    dispatch(
      deleteProduct({
        id: product._id
      })
    ).then(() => dispatch(getProducts()))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt='product'
        height='200'
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {product.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={handleEditClick}>
          Edit
        </Button>
        <Button size='small' onClick={handleDeleteClick}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
