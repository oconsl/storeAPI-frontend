import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../slices/modal'
import {
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ProductForm from '../ProductForm/ProductForm'

const Transition = forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />
})

const Modal = () => {
  const dispatch = useDispatch()
  const modalInfo = useSelector((state) => state.modal)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <Dialog
      fullScreen
      open={modalInfo.open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'
            sx={{ marginRight: '1rem', color: 'red' }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' component='div'>
            {modalInfo.type === 'add'
              ? 'Fill the form to add new product'
              : 'Edit to save new information'}
          </Typography>
        </Toolbar>
      </AppBar>
      <ProductForm />
    </Dialog>
  )
}

export default Modal
