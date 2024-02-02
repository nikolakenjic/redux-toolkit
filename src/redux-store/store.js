import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux-slice/cartSlice';
import modalReducer from './redux-slice/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
