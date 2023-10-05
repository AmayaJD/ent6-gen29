import { Navigate, Outlet } from 'react-router-dom'
import HeaderMusic from '../components/shared/HeaderMusic'

const ProtectedRoute = () => {
   

  if (localStorage.getItem('token') !== null) {
    return (<> 
      <HeaderMusic/> 
      <Outlet/> 
    </>)
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
