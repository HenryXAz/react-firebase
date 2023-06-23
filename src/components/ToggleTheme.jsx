import { useDispatch } from 'react-redux'
import Button from './Button'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import { useEffect, useState } from 'react'
import { toggle } from '../features/theme/themeSlice'

export default function ToggleTheme()
{
  const [theme, setTheme] = useState(localStorage.theme)
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches


  const dispatch = useDispatch()

  const handleToggleTheme = () => {

    if(theme === 'dark' || (!theme && systemTheme)) {
      setTheme('light')
      localStorage.theme = 'light'

      dispatch(toggle({theme: 'light'}))
    } else {
      setTheme('dark')
      localStorage.theme = 'dark'
      dispatch(toggle({theme: 'dark'}))
    }

  }

  useEffect(() => {
    if(theme === 'dark' || (!theme && systemTheme)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return(
    <Button 
      onClick={handleToggleTheme}
      variant={theme === 'dark' ? 'zinc' : 'white'} 
      classes="shadow-md rounded-md "
    >
      <img src={theme === 'dark'? Sun : Moon} alt="" />
    </Button>
  )
}