import  { createSlice } from '@reduxjs/toolkit'

const systemTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
const localTheme = localStorage.theme

const initialStateTheme = () => localTheme === "dark" || (!localTheme && systemTheme ) ? 'dark' : 'light' 

const theme = createSlice({
  name: 'theme',
  initialState: {
    theme: initialStateTheme(),
  },
  reducers: {
    toggle: (state, action) => {
      const { theme } = action.payload
      state.theme = theme
    },
  }
})


export const{ toggle } = theme.actions
export default theme.reducer

