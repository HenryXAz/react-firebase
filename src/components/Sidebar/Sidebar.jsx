import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SidebarLink from './SidebarLink'
import Button from "../Button";
import Hamburguer from '../icons/Hamburguer'
import DashboardIcon from '../icons/DashBoardIcon';
import UsersIcon from '../icons/UsersIcon';

export default function Sidebar() {
  const [size, setSize] = useState("w-12")
  const [expanded, setExpanded] = useState(false)

  const user = useSelector(state => state.auth.user)
  const theme = useSelector(state => state.theme.theme)
  const [color, setColor] = useState(theme === 'dark' ? '#eee' : '#222')

  useEffect(() => {
    setColor(theme === 'dark' ? '#eee' : '#222')
  }, [theme])

  const handleResizeNavbar = () => {
    if (!expanded) {
      setSize("w-72")
      setExpanded(true)
    } else {
      setSize("w-12")
      setExpanded(false)
    }
  }

  return (
    <aside className={`${size} flex flex-col  transition-all ease-in-out duration-100 dark:bg-zinc-900 bg-white`}>
      <div className="flex justify-end">
        <Button variant="transparent" onClick={handleResizeNavbar}>
          <Hamburguer
            color={color}
          />
        </Button>

      </div>

      <div className="mt-5 gap-2 flex flex-col">

        <Link to="/">
          <SidebarLink to="/">
            <span className="text-3xl">
              ⌂
            </span>
            {size !== 'w-12' && "  Inicio"}
          </SidebarLink>
        </Link>

        <Link to="/productos">
          <SidebarLink to="/productos">
            <span className="font-bold text-2xl">
              P
            </span>
            {size !== 'w-12' && " Productos"}
          </SidebarLink>
        </Link>

        {user.role !== 'seller' && 
          <Link to="/dashboard">
          <SidebarLink to="/dashboard">
            <div className="flex items-center justify-center gap-2">
              <DashboardIcon color={color} />
              {size !== 'w-12' && "Dashboard"}
            </div>
          </SidebarLink>
        </Link>  
        }

        {user.role === "admin" && (
          <Link to="/usuarios">
            <SidebarLink to="/usuarios">
              <div className="flex items-center justify-center gap-2">
                <UsersIcon color={color} />
                {size !== 'w-12' && "Usuarios"}
              </div>
            </SidebarLink>
          </Link>
        )}

      </div>

    </aside>
  )
}