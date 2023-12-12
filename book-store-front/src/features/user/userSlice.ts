import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  loggedIn: boolean;
  id: string;
}

const initialState = {
  loggedIn: true,
  id: '',
} as IUserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state, action) => {
      state.loggedIn = false;
      state.id = action.payload;
    }
  }
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;