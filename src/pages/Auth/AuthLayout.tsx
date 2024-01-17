import { useSelector } from "react-redux"
import { selectIsAuthenticated } from "../../store/slices/authSlice"
import { Navigate, Outlet } from "react-router-dom"


const AuthLayout = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated)

  return (
    <div> <>
    {isAuthenticated ? (
      <Navigate to="/"/>
    ):(
      <>
        <section>
          <Outlet />
        </section>
      </>
    )}
  </></div>
  )
}

export default AuthLayout