import React from 'react'
import { useDispatch } from 'react-redux'
import { openAddModal } from '../../slices/modal'

const AddProductButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openAddModal())
  }

  return (
    <div>
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default AddProductButton
