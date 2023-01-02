import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from '../redux/Slice/UserSlice'
import Login from '../redux/Slice/Login'
import registerSlice from './Slice/registerSlice'


export const store = configureStore({
  reducer: {
   product:UserSlice,
   login:Login,
   register:registerSlice
  },
})