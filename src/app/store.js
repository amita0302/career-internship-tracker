import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import internshipsReducer from '../features/internships/internshipsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    internships: internshipsReducer,
  },
})

export default store