import axios from "axios"
import { setCredentialsSlice } from "../store/slices/credencials.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    
    const baseURL = 'https://playlist-share-dev.fl0.io'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginUser = (data) => {
        const url = `${baseURL}/api/auth/login`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                const token = res.data.token
                const userName = res.data.name
                const userEmail = res.data.email
                localStorage.setItem("token", token)
                localStorage.setItem("userName", userName)
                localStorage.setItem("userEmail", userEmail)
                const obj = {token, userName, userEmail}
                dispatch(setCredentialsSlice(obj))
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                dispatch(setCredentialsSlice(null))
                localStorage.removeItem("token")
                localStorage.removeItem("userName")
                localStorage.removeItem("userEmail")
            })
    }

    const registerUser = (data) => {
        const url = `${baseURL}/api/auth/register`
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    
    // retornamos un objetos
    return { loginUser, registerUser }
}

export default useAuth