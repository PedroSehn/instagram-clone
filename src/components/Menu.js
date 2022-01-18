import React from 'react';
import '../styles/Menu.scss';
import { ReactComponent as Home } from '../images/home-w.svg';
import { ReactComponent as Chat } from '../images/chat-w.svg';
import { ReactComponent as Explore } from '../images/explore-w.svg';
import { ReactComponent as NewPost } from '../images/new-post-w.svg';
import { ReactComponent as Activity } from '../images/activity-w.svg';

import ProfileIcon from './ProfileIcon';

function Menu(){
    return (
        <div className="menu"> 
            <Home className="icon" />
            <Chat className="icon" />
            <NewPost className="icon" />
            <Explore className="icon" />
            <Activity className="icon" />
            <ProfileIcon iconSize="small" image = { '' }  storyBorder={true}/>
        </div>
    )
}

//TODO ENTENDER PORQUE A BORDA DE STORYES NAO APARECE

export default Menu;