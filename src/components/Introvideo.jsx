import React from 'react'
import video from "../assets/MBA Chai Wala.mp4"
const Introvideo = () => {
  return (
    <>
    <div className='intro'>
        <video src={video} muted autoPlay loop controlsList='no-download'></video>
    <div></div>
    </div>
    </>
  )
}

export default Introvideo