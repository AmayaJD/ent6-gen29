import '../styles/HomePage.css'
import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFech";
import TrackCard from "../components/HomePage/TrackCard";
import Loading from '../components/shared/Loading';


const HomePage = () => {

  const [listTracks, getTracks, isLoading] = useFetch()
  const [inputValue, setInputValue] = useState("romance")
  const [quantityPerPage, setQuantityPerPage] = useState(10)


  useEffect(() => {
    getTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])
  
  // console.log(listTracks)

  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  } 

  const handleTracksPerPage = e => {
    setQuantityPerPage(e.target.value)
  }

  // const tracksPlayList = useSelector(store => store.tracks)
  // console.log(tracksPlayList)

  return ( 
    
    <div className="container_homePage">
      <div className='homePage__search'>
        <form className='homePage__form' onSubmit={handleSearch}>
          <input className='homePage__input' ref={inputSearch} type="text" placeholder='Search an "Artist" or "Song" '/>
        </form>
        <select className='homePage__select' onChange={handleTracksPerPage} defaultValue={10}>
            {
              [2, 4, 6, 8, 10].map ( tracksPerPage => (
                <option key={tracksPerPage}value={tracksPerPage}>
                  {tracksPerPage}
                </option>
              ))
            }
        </select>
      </div>
      <div className="container__homePage__trackCard">
        {
          isLoading 
          ? <Loading/>
          :
          (listTracks?.tracks.items.map( track => (
            <TrackCard 
            key={track.id}
            track={track}
            />
          )))
        }
      </div>
      
    </div>
  )
}

export default HomePage