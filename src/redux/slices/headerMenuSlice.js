import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false
}

export const toggleMenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    showMenu: state => {
      state.show = !state.show
    }
  }
})

const { actions, reducer } = toggleMenuSlice

export const { showMenu } = actions

export default reducer
