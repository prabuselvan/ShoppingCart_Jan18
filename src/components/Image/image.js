import React from 'react';
import './image.css';
const Avatar= (props)=> {
    return (
        <div className="image-wrapper">
                  <img {...props}/>
        </div>
    )
  
}

export default Avatar;