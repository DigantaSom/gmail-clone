import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    isSendMessageOpen: false,
    selectedMail: null
  },
  reducers: {
    openSendMessage: state => {
      state.isSendMessageOpen = true;
    },
    closeSendMessage: state => {
      state.isSendMessageOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    }
  }
});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;

export const selectIsSendMessageOpen = state => state.mail.isSendMessageOpen;
export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;
