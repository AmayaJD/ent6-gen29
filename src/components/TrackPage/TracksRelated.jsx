import '../../styles/TracksRelated.css'
import { useEffect, useState } from "react"
import useFech from "../../hooks/useFech"
import TrackCard from "../HomePage/TrackCard"

const TracksRelated = ({artist}) => {

    const [ tracksList, getTracksList ] = useFech()
    const [isShowPlayer, setIsShowPlayer] = useState(false)

    useEffect(() => {
        if (artist) {
            getTracksList(`/api/tracks?limit=10&q=${artist}}`)
        }
    }, [artist])
    
    // console.log(tracksList)

    const handlPLayers = () => {
        setIsShowPlayer(!isShowPlayer)
    }
    // console.log(activeModal)
    // tracksRelated__components a esta clase la debemos aplicar el modal
  return (
    <div className="container_tracksRelated">
        <h3 onClick={handlPLayers}>Tracks Realated...</h3>
        <section className= 'tracksRelated__components'>
            {
            isShowPlayer
                &&(
                tracksList?.tracks.items.map(track => (
                <TrackCard
                key={track.id}
                track={track}
                />
               ))
            )

            }
        </section>
    </div>
  )
}

export default TracksRelated