import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  type: '',
  selectedId: ''
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openAddModal: (state) => {
      state.open = true
      state.type = 'add'
      state.selectedId = ''
    },
    openEditModal: (state, { payload: id }) => {
      state.open = true
      state.type = 'edit'
      state.selectedId = id
    },
    closeModal: (state) => {
      state.open = false
      state.type = ''
      state.selectedId = ''
    }
  }
})

export const { openAddModal, openEditModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
