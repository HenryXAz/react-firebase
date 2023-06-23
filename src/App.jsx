import { auth, db } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, getDocs, } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TreDotsLoader from './assets/tree-dots-loader.svg'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Seller from './pages/Seller'
import Products from './pages/Products/Products'
import Users from './pages/Users/Users'
import ProtectedRoute from './pages/ProtectedRoute'
import { login, logout } from './features/auth/authSlice'
import Auth from './pages/Auth'
function App() {

  const [loading, setLoading] = useState(true)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async currentUser => {
      if(currentUser) {
        const docRef = collection(db, "users")
        const querySnapShot = query(docRef, where("email", "==", currentUser.email))
        const docSnapShot = await getDocs(querySnapShot)

        const userData = docSnapShot.docs[0]._document.data.value.mapValue.fields

        dispatch(login({
        
            email: currentUser.email,
            uid: currentUser.uid,
            displayName: user?.displayName,
            name: userData.name.stringValue,
            last_name: userData.last_name.stringValue,
            role: userData.role.stringValue,
            status: userData.role.stringValue,
          }
        ))
      } else {
        dispatch(logout())
      }
      setLoading(false)
    })

  }, [])

  useEffect(() => {
    const theme = localStorage.theme
    const systemTheme = window.matchMedia('(prefers-color-scheme:dark)').matches

    if (theme === 'dark' || (!theme && systemTheme)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }

  }, [])


  if (loading) {
    return (
      <div className="h-screen absolute flex items-center justify-center bg-gray-100 w-full dark:text-gray-200 dark:bg-zinc-800">
        <img  src={TreDotsLoader} alt="cargando..." />
      </div>
    )
  }

  return (
    <div className="h-screen absolute bg-gray-100 dark:bg-zinc-800 w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={
            <ProtectedRoute itsAuthorized={!user} redirectTo="/productos">
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute itsAuthorized={!!user && user.role === 'admin'} redirectTo="/login">
              <Auth>
                <Dashboard />
              </Auth>
            </ProtectedRoute>
          } />

          <Route path="/usuarios" 
            element={
              <ProtectedRoute itsAuthorized={!!user && user.role === "admin"} redirectTo="/login">
                <Auth>
                  <Users />
                </Auth>
              </ProtectedRoute>
            }
          />
          <Route path="/productos" 
            element={
              <ProtectedRoute itsAuthorized={!!user} redirectTo="/login">
                <Auth>
                  <Products />
                </Auth>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
