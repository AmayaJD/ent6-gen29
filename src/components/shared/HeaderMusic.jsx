import '../../styles/HeaderMusic.css';
import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usePlaylist from '../../hooks/usePlaylist';

const HeaderMusic = () => {     

    const tracksPlayList = useSelector(store => store.tracks)
    // console.log(tracksPlayList)
    const [activePlayList, setActivePlayList] = useState(false)
    const { reset, handleSubmit, register } = useForm()
    const { postPLaylist } =usePlaylist()

    
    const submit = data => {
      const obj = {
        ...data,
        tracks: tracksPlayList.map(track => ({id: track.id}))
      }
      
      postPLaylist(obj)
      
      reset({
        title: '',
        to: '',
        message: ''
      })
    }

    const activeModal = () => {
      setActivePlayList(true)
    }

    const disabledModal = () => {
      setActivePlayList(false)
    }

    const handleOutSide = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("userName")
      localStorage.removeItem("userEmail")
    }

  return (

    <>
      <div className='headerMusic'>
        <h1 className='title'>GIFT MUSIC</h1>
        <div className='headerM__option'>
          <Link onClick={handleOutSide} className='headerM__btnOption' to={'/auth/login'}>Sign off</Link>
          <Link className='headerM__btnOption' to={'/playList'}>My Recordings</Link>
          <button className='headerM__btnPlayList' onClick={activeModal}><i className='bx bx-plus'></i> PlayList</button>
        </div>
      </div>
      <header className={`${activePlayList ? 'active_container_headerM' : 'container_headerM'}`}>
        <div className='headerM__menu'>
          <header className='headerM__title'>
            {/* <h1>Gift Music</h1> */}
            <button className='headerM__btnClose' onClick={disabledModal}><i className='bx bxs-x-circle bx-flashing bx-flip-vertical' ></i></button>
          </header>
          <form className='headerM__form' onSubmit={handleSubmit(submit)}>
            <div className='headerM__containerInput'>
              <div className='headerM__input'>
                <label htmlFor="title">Title</label>
                <input {...register('title')} type="text" id="title" />
              </div>
              <div className='headerM__input'>
                <label htmlFor="to">To</label>
                <input {...register('to')} type="text" id="to" />
              </div>
              <div className='headerM__input'>
                <label htmlFor="message">Message</label>
                <textarea {...register('message')} id="message" />
              </div>
            </div>
            <>
              {
                tracksPlayList.map( track => (
                  <TrackList
                  key={track.id}
                  track={track}
                  />
                  ))
                }
            </>
            <button className='headerM__btn'>Create</button>
          </form>
        </div>
      </header>
    </>
  )
}

export default HeaderMusic