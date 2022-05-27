import React, { forwardRef } from 'react'
import {
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Transition = forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />
})

const Modal = ({ setOpen, type = 'add' }) => {
  const handleClose = () => {
    setOpen(() => false)
  }

  return (
    <Dialog
      fullScreen
      open={true}
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
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' component='div'>
            {type === 'add'
              ? 'Fill the form to add new product'
              : 'Edit to save new information'}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* PRODUCT COMPONENT HERE */}
    </Dialog>
  )
}

export default Modal
