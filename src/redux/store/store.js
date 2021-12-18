import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../slices/headerMenuSlice'

const reducer = {
  menu: menuReducer,
}

const store = configureStore({
  reducer,
})

export default store
