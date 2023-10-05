import '../styles/ArtistPage.css';
import { Link, useNavigate, useParams } from "react-router-dom"
import useFech from "../hooks/useFech"
import { useEffect } from "react"
import ArtistInfo from "../components/ArtistPage/ArtistInfo"
import ArtistAlbum from "../components/ArtistPage/ArtistAlbum"
import SongsTop from "../components/ArtistPage/SongsTop"
import Loading from "../components/shared/Loading"

const ArtistPage = () => {

   const { id } = useParams()

   const [ artist, getArtist, isLoading] = useFech()

    useEffect(() => {
        getArtist(`/api/artists/${id}`)
    }, [id])
    
    console.log(artist)

  return (
    
    <div className="container__artistPage">
        <Link className='artistPage__btn' to={'/'}>Back</Link>
        {
          isLoading
          ? <Loading/>
          :
          <>
          <ArtistInfo
          artist={artist}
          />
          <ArtistAlbum
          albums={artist?.albums}
          />
          <SongsTop
          Top={artist?.songsTop}
          />
        </>
        }
    </div>
  )
}

export default ArtistPage