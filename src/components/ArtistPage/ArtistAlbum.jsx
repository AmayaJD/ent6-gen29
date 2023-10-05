import '../../styles/CardAlbum.css';
import AlbumCard from "./AlbumCard"

const ArtistAlbum = ({ albums }) => {
  return (
    <section className='container__artistAlbum'>
      <h3>Artist` Album</h3>
        <div className='container__albums'>
          {
            albums?.map(albumInfo => (
              <AlbumCard 
                key={albumInfo.id}
                album={albumInfo}
              />
            ))
          }
        </div>
    </section>
  )
}

export default ArtistAlbum