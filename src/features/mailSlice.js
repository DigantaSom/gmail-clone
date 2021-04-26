import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    isSendMessageOpen: false
  },
  reducers: {
    openSendMessage: state => {
      state.isSendMessageOpen = true;
    },
    closeSendMessage: state => {
      state.isSendMessageOpen = false;
    }
  }
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectIsSendMessageOpen = state => state.mail.isSendMessageOpen;

export default mailSlice.reducer;
