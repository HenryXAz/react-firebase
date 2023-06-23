import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Landing()
{
  const user = useSelector(state => state.auth.user)

  return (
    <div className="">
      <nav className="w-full mx-auto p-2 flex justify-end">
        {!!user && (
          <Link to="/dashboard" >
            <span className='dark:text-gray-200 text-gray-900 '>
              Dashboard
            </span>
          </Link>
        )}

        {!user && (
          <Link to="/login" >
          <span className='dark:text-gray-200 text-gray-900 '>
            Login
          </span>
        </Link>
        )}
      </nav>

      <h1 className="text-center mt-6 dark:text-gray-200 text-2xl ">Landing Page</h1>
    </div>
  )
}