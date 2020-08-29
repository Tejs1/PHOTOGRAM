import React, { useState } from 'react';
import './App.css';
import Post from './Post';


function App() {
    const [posts,setposts] = useState
    ([
    {
        username: "kartik",
        caption: "this works",
        imageUrl: "https://reactjs.org/logo-og.png" 
    },
    {
        username: "kartik",
        caption: "this works",
        imageUrl: "https://reactjs.org/logo-og.png"
    }
]);
    return (
        <div className ="app">
            {/* HEADER */}
            <div className="app__header">
                <img
                    className="app__headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>
            
            <h1>HI there whats up lets start </h1>
            {/* POST */}
            {
                posts.map(post => (
                    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
                ))
            }
        </div>
    );
}

export default App;