import { useDispatch } from 'react-redux'
import { deleteTrack } from '../../store/slices/tracks.slice'
import '../../styles/TrackList.css'
const TrackList = ({ track }) => {
  // console.log(track)

  const dispatch = useDispatch()

  const handleDeleteTrack = () => {
    dispatch(deleteTrack(track))
  }

  return (
    <section className='container__trackList'>
        <header className='trackList__header'>
            <img className="trackList__img" src={track.album.images[1].url} alt="" />
        </header>
        <article className='trackList__info'>
            <h3 className='trackList__song'>{track.name}</h3>
            <ul className='trackList__artist'>
                {
                  track.artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                  ))
                }
            </ul>
        </article>
        <footer className='trackList__footer'>
        <i onClick={handleDeleteTrack} className='bx bx-minus-circle'></i>
        </footer>
    </section>
  )
}

export default TrackList