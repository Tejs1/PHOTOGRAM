import React from 'react'
import './VideoHeader.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';


function VideoHeader() {
    return(
        <div className='videoHeader'>
            <ArrowBackIosIcon 
            style={ { color:"white" }}/>
            <h3>Reels</h3>
            <CameraAltOutlinedIcon
            style={ { color:"white" }}
            />
      

        </div>
    );
}


export default VideoHeader