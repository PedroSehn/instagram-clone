import React from 'react';
import '../styles/story.scss';

import ProfileIcon from './ProfileIcon';
import users from '../data/users';

function Story(){
   let accoutName = users[Math.floor(Math.random() * users.length)].username;
   
    if(accoutName.length > 10){
        accoutName = accoutName.substring(0, 10) + '...';
    }

    return(
    <div className="story">
      <ProfileIcon iconSize='big' storyBorder={ true } />
      <spam className="accoutName">{ accoutName }</spam>  
    </div>
    )
}

export default Story;
