import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import propertySlice from './reducers/propertySlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    property:propertySlice
  },
})
