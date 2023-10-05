import { useEffect } from "react"
import usePlaylist from "../hooks/usePlaylist"
import { Link } from "react-router-dom"

const PlayListPage = () => {

    const { playlist, getPlaylist } = usePlaylist()

    useEffect(() => {
        getPlaylist()
    }, [])

    console.log(playlist)

    return (
        <article className="container_playListPage">
            <Link  to={'/'}>Back</Link>
            {
                playlist.map(play => (
                    <div key={play.id}>
                        <h2>{play.title}</h2>
                        <span>{play.to}</span>
                        <span>{play.message}</span>
                    </div>
                ))
            }
        </article>
    )
}

export default PlayListPage