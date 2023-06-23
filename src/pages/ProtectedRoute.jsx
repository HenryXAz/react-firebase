import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children, itsAuthorized, redirectTo})
{
  
  if(!itsAuthorized) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      {children}
    </>
  )
}