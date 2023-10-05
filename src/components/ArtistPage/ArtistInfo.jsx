import '../../styles/ArtistInfo.css'

const ArtistInfo = ({ artist }) => {
  return (
    <section className="section_artistInfo">
        <header>
            <img className='section_img' src={artist?.images[2].url} alt="" />
        </header>
        <article className='artistInfo__article'>
            <h2 className='artistInfo__track'>{artist?.name}</h2>
            <ul className='artistInfo__ul'>
                <li><span>Followers: </span><span>{artist?.followers.total}</span></li>
                <li><span>Popularity: </span><span>{artist?.popularity}</span></li>
                <li><span>Genres: </span><span className='artistInfo__ul'>{artist?.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                ))}</span></li>
            </ul>
        </article>
    </section>
  )  
}

export default ArtistInfo