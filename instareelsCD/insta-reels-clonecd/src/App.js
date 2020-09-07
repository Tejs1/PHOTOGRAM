import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
     
      <h1>Rollin' Reels</h1>
      <div className="app__top">
        <img className="app__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
        alt=""
        />
        <h3>Reels</h3> 
        

      {/* Image at top   */}
      {/*   Reels */}
      </div>

      <div className="app__videos">
        <VideoCard
          channel='Kartik'
          avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Adolf_Hitler_cropped_restored.jpg/1200px-Adolf_Hitler_cropped_restored.jpg'
          song='--Raabta--'
          url='https://instagram.flhr3-2.fna.fbcdn.net/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=instagram.flhr3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX-xOjlv&oe=5F38FACF&oh=fbe19a529394ac8cc1a61f1b2016e54'
          likes={920}
      
          shares={88}
        />
        <VideoCard
        channel = "Sarthak"
        avatarSrc='https://upload.wikimedia.org/wikipedia/commons/0/09/Joanne_Woodward_-_1957_-_Three_Faces_of_Eve_movie_poster.jpg'
        song='Rola pay Gayaaaa'
        
        />
        <VideoCard/> 
        <VideoCard/> 
        <VideoCard/> 
        
    
        {/* Videos */}
        {/* Videos */}
        {/* Videos */}
        {/* Videos */}
      </div>
    </div>
  );
}

export default App;
