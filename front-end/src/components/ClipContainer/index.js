import React from 'react'
import Clip from './Clip'
import Playlist from './Playlist'
import './clip-container.css'

const ClipContainer = (props) => {
  
  return (
    <div>
      <Clip />
      <Playlist />
    </div>
  )
}

export default ClipContainer
