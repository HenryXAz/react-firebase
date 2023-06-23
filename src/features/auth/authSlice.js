import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      const { email, uid, displayName, name, last_name, role, status} = action.payload

      state.user = {
        email,
        uid,
        displayName,
        name,
        last_name,
        role,
        status,
      }
    },
    logout: (state) => {
      state.user = null
    },
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer