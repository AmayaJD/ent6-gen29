import '../styles/TrackPage.css'
import { useNavigate, useParams } from "react-router-dom"
import useFech from "../hooks/useFech"
import { useEffect } from "react"
import TrackInfo from "../components/TrackPage/TrackInfo"
import TracksRelated from "../components/TrackPage/TracksRelated"
import Loading from '../components/shared/Loading'

const TracksPage = () => {

  
  const { id } = useParams()
  
  const [ track, getTrack, isLoading ] = useFech()
  
  useEffect(() => {
    getTrack( `/api/tracks/${id}`)
  }, [id])
  
  // console.log(track)
  
  const navigate = useNavigate()
  
  const handleBacks = () => {
    navigate('/')
    // navigate(1) or navigate(-1)
  }
  
  return (
    <div className="container_tracksPage">
      <button className='tracksPage__btn' onClick={handleBacks}>Back</button>

      {
        isLoading
        ? <Loading/>
        :<>
          <TrackInfo 
          track={track}
          />
          <TracksRelated
          artist={track?.artists[0].name}
          />
        </>
      }
    </div>
  )
}

export default TracksPage

