import React from 'react';
import '../styles/profile.scss';
import ProfileIcon from './ProfileIcon';
import users from '../data/users';
import PropTypes from 'prop-types';

function Profile(props){
    const { 
        username,
        caption,
        urlText,
        captionSize,
        storyBorder,
        hideAccountName,
        iconSize,
        image,
    } = props;
    
    let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

    return (
    <div className="profile">
        <ProfileIcon 
        iconSize={ iconSize } 
        storyBorder={ storyBorder }
        image={ image }
        />
        {(accountName || caption) && !hideAccountName && (
            <div className="textContainer">
                <span className="accountName">{ accountName }</span>
                <spam className={`caption ${captionSize}`}>{ caption }</spam>
            </div>
        )}
        <a href='/nstagram-clone/'>{urlText}</a>
    </div>)
}

export default Profile;

Profile.propTypes = {
    username: PropTypes.string,
    caption: PropTypes.string,
    urlText: PropTypes.string,
    captionSize: PropTypes.string,
    storyBorder: PropTypes.bool,
    hideAccountName: PropTypes.bool,
    iconSize: PropTypes.string,
    image: PropTypes.string,
  };
