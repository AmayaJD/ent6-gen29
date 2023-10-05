import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { credentialsSlice } from '../store/slices/credencials.slice'
import HeaderMusic from '../components/shared/HeaderMusic'

const ProtectedRoute = () => {
  
    const credential = useSelector(store => credentialsSlice)  

  if (credential !== null) {
    return <> 
      <HeaderMusic/> <Outlet/> 
    </>
  } else { 
    return <Navigate to='/auth/login' />
  }
  
}

export default ProtectedRoute


// if (localStorage.getItem('token') !== null) {
  //   return <><HeaderMusic/>
  //     <Outlet/></>
  //   } else {
  //   return <Navigate to='/auth/login'/>
  //   }
