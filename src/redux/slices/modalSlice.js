import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  title: '',
  hiddenField: '',
}

export const toggleModalSlice = createSlice({
  name: 'modalForm',
  initialState,
  reducers: {
    showModal(state, action) {
      state.show = !state.show
      state.title = action.payload.title
      state.hiddenField = action.payload.hiddenField
    },
  }
})

const { actions, reducer } = toggleModalSlice

export const { showModal } = actions

export default reducer
