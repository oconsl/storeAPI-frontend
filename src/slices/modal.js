import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  openDetails: false,
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
    },
    closeDetailsModal: (state) => {
      state.openDetails = false
      state.selectedId = ''
    },
    openDetailsModal: (state, { payload: id }) => {
      state.openDetails = true
      state.selectedId = id
    }
  }
})

export const {
  openAddModal,
  openEditModal,
  closeModal,
  closeDetailsModal,
  openDetailsModal
} = modalSlice.actions

export default modalSlice.reducer
