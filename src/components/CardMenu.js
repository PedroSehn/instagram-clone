import React from 'react';
import '../styles/cardMenu.scss';
import { ReactComponent as Inbox } from '../images/inbox.svg';
import { ReactComponent as Comment } from '../images/comment.svg';
import { ReactComponent as Notifications } from '../images/activity-w.svg';
import { ReactComponent as Bookmarks } from '../images/bookmark.svg';

function CardMenu() {
    return (
   <div className="cardMenu">
       <div className="interactions">
            <Notifications className="icon"/>
            <Comment className="icon" />
            <Inbox className="icon"/>
       </div>
       <Bookmarks className="icon" />
   </div>
   )
}

export default CardMenu;