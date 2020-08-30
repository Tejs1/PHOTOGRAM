import React, { useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';


function App() {
    const [posts, setPosts] = useState([]);
//  useEffect ->runs a piece of code based on a specific condition   
    
    useEffect(() => {
    // this is where code runs
        db.collection('posts').onSnapshot(snapshot => {
        // every time new post is added, this code fires up
        setPosts(snapshot.docs.map(doc => doc.data()));
    })
    //If present, effect will only activate if the values in the list change.
    }, []);

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