import React, { useState ,useRef } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import vidi from './Videos/vidi1.mp4'




function VideoCard({ likes , shares, channel, song,url, avatarSrc}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(isVideoPlaying){
            videoRef.current.pause();
            setIsVideoPlaying(false)
        }
        else{
            videoRef.current.play()
            setIsVideoPlaying(true);
        }

    };
    //useState
    //useRef
    return (
        <div className="videoCard">
            <VideoHeader/>
            <video
            ref = {videoRef}
            onClick={onVideoPress} 
            className='videoCard__player'
            src={vidi}
            alt = 'IG Reels video'
            loop
        />
        
        <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />


        </div>
    );
}


export default VideoCard