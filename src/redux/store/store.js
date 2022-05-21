import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../slices/headerMenuSlice'
import modalFormReducer from '../slices/modalSlice'

const reducer = {
  menu: menuReducer,
  modalForm: modalFormReducer,
}

const store = configureStore({
  reducer,
})

export default store
