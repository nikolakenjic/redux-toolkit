import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closedModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closedModal } = modalSlice.actions;

export default modalSlice.reducer;
