import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { logout } from '../../features/auth/authSlice'
import Button from '../Button';
import ToggleTheme from "../ToggleTheme";


export default function Sidebar({children})
{
  const user = useSelector(state => state.auth.user)

  const dispatch = useDispatch()

  const handleLogOut = () => {
    signOut(auth)
    dispatch(logout()) 
  }

  return(
    <div className="w-full flex justify-end items-center"> 
      <ToggleTheme />
      <p className="p-2 text-gray-900 dark:text-gray-200">
        {user.displayName ? user.displayName : user.email}
      </p>
      <Button variant="transparent" classes="rounded-md border border-indigo-600 hover:text-gray-200 hover:bg-indigo-500 dark:text-indigo-500 dark:hover:bg-indigo-500 dark:hover:text-gray-200 text-indigo-500" onClick={handleLogOut}>
        cerrar sesión
      </Button>
    </div>
  )
}