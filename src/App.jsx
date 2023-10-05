import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import { setCredentialsSlice } from './store/slices/credencials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoute from './pages/ProtectedRoute'
import TracksPage from './pages/TracksPage'
import ArtistPage from './pages/ArtistPage'
import PlayListPage from './pages/PlayListPage'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    const userName = localStorage.getItem("userName")
    const userEmail = localStorage.getItem("userEmail")
    const obj = {token, userName, userEmail}
    dispatch(setCredentialsSlice(obj))
  }, [])

  return (
    <>
      {/* <h1>Gift Music 6</h1>  */}
      <Routes>
        <Route path='/auth/login' element={<LoginPage />}/>
        <Route path='/auth/register' element={<RegisterPage />}/>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/track/:id' element={<TracksPage />} />
          <Route path='/artist/:id' element={<ArtistPage/>} />
          <Route path='/playList' element={<PlayListPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App