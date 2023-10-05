import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useFech = () => {

    
    const [infoApi, setInfoApi] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const baseUrl = "https://playlist-share-dev.fl0.io"
    // {{BASE_URL_SONGS}}/api/tracks/11dFghVXANMlKmJXsNCbNl
    
    const getApi = (path) =>{
        setIsLoading(true)
        const url = `${baseUrl}${path}`
        axios.get(url, getConfigToken())
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }

    return [ infoApi, getApi, isLoading ]
}

export default useFech