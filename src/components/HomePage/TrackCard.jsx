import { Link, useNavigate } from 'react-router-dom'
import '../../styles/TrackCard.css'
import { useDispatch } from 'react-redux'
import { addTrack} from '../../store/slices/tracks.slice'
const TrackCard = ({ track }) => {

    const handleSpotify = () => {
        Link
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddTrack = () => {
        dispatch(addTrack(track)) 
    }

    const handleArtist = (id) => {
        navigate(`/artist/${id}`)
    }
    // console.log(track)
  return (
    <section className="container_trackCard">
        <header className='trackCard__header'>
            <img className='trackCard__img' src={track.album.images[1].url} alt="" />
        </header>
        <article className='trackCard__info'>
            <Link to={`/track/${track.id}`}>
                <h3 className='trackCard__song'>{track.name}</h3>
            </Link>
            <ul className='trackCard__ulArtist'>
                {
                    track.artists.map(artist => (
                        <li onClick={() => handleArtist(artist.id)} className='trackCard__artist' key={artist.id}>{artist.name}</li>
                    ))
                    // <li onClick={ handleArtist(artist.id)}>track.artists[0].name</li>
                }
            </ul>
        </article>
        <footer className='trackCard__footer'>
            <a target='_blank' href={track.external_urls.spotify}className='trackCard__btn'>
                <i className='bx bxl-spotify'></i>
            </a>
            <button onClick={handleAddTrack} className='trackCard__btn'>
                <i className='bx bx-plus-circle' ></i> 
            </button>
        </footer>
    </section>
  )
}

export default TrackCard