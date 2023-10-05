import '../../styles/SongsTop.css';
import TrackCard from "../HomePage/TrackCard"

const SongsTop = ({ Top }) => {
  return (
    <section className="container_topSong">
        <h3>Top Songs</h3>
        <div>
            {
               Top?.map(TopInfo => (
                <TrackCard 
                key={TopInfo.id}
                track={TopInfo}
                // el nombre de la props como por defecto la tiene conponente
                />
               ))
            }
        </div>
    </section>
  )
}

export default SongsTop