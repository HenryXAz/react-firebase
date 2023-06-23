import { useLocation } from "react-router-dom"

export default function SidebarLink({children, to})
{
  const location = useLocation()

  const background = to === location.pathname ? 
    'bg-indigo-500/25 text-indigo-600  dark:text-gray-200 dark:bg-indigo-500' 
    : 'bg-transparent text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-indigo-500/25 '
    
  return (
    <div 
      className={`${background} w-full text-md  hover:cursor-pointer  text-center p-2 transition ease-in-out duration-500`}>
      {children}
    </div>
  )
}