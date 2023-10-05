import '../../styles/TrackInfo.css'
import { useState } from "react"


const TrackInfo = ({track}) => {

    const [isShowPlayer, setIsShowPlayer] = useState(false)
    
    const handlPLayers = () => {
        setIsShowPlayer(!isShowPlayer)
    }

  return (
    <div className="conatiner_trackInfo">
    <article className='trackInfo__info'>
    <header>
      <img className='trackInfo__img' onClick={handlPLayers} src={track?.album.images[0].url} alt="" />
    </header>
    <section className='trackInfo__descri'>
      <h3 className='trackInfo__songs'>{track?.name}</h3>
      <ul className='trackInfo__artist'>
        {
          track?.artists.map(artist => (
            <li key={artist.id}>{artist.name}</li>
          ))
        }
      </ul>
      <p className='trackinfo__data'>Album:<span>{track?.album.name}</span></p>
      <p className='trackinfo__data'>Año de salida:<span>{track?.album.release_date}</span></p>
    </section>
  </article>
  { 
    isShowPlayer
    && (
    <iframe 
      style={{borderRadius:"12px"}}
      src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
      width="100%"
      height="180"
      frameBorder="0"
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    ></iframe>
    )
  }</div>
  )
}

export default TrackInfo