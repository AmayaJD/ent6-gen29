const AlbumCard = ( {album} ) => {

    const yearReleaseDate = new Date(album.release_date).getFullYear();

  return (
    <article>
        <header>
            <img src={album.images[2].url} alt="" />
        </header>
        <ul>
            <li>{album.name}</li>
            <li>{yearReleaseDate}</li>
        </ul>
    </article>
  )
}

export default AlbumCard