import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Modal,
  CardMedia
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeDetailsModal } from '../../slices/modal'

const DetailsModal = () => {
  const dispatch = useDispatch()
  const openModal = useSelector((state) => state.modal.openDetails)
  const selectedId = useSelector((state) => state.modal.selectedId)
  const products = useSelector((state) => state.products.data)
  const product = products.find((product) => product?._id === selectedId)

  const handleClose = () => {
    dispatch(closeDetailsModal())
  }

  return (
    <Box
      className='details__container'
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            color: 'black',
            backgroundColor: 'white',
            flexDirection: 'row'
          }}
        >
          <Box>
            <Button onClick={handleClose} variant='contained'>
              <CloseIcon />
            </Button>
            <Grid container>
              <Grid item md={12} lg={4}>
                <Box>
                  <CardMedia
                    component='img'
                    alt='product'
                    className='card__image'
                    height='200'
                    src={product.imageUrl}
                  />
                </Box>
                <Box>
                  <Typography>{product.name}</Typography>
                  <Typography id='modal-modal-description'>
                    $ {product.price}
                  </Typography>
                  <Typography id='modal-modal-description'>
                    {product.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
    </Box>
  )
}

export default DetailsModal
