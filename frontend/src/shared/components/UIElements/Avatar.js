import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div className="item-avatar-image">
      <img 
        src={props.src} 
        alt={props.alt}
        style={{ width: props.width, height: props.width }}  
      />
    </div>
  )
}

export default Avatar;