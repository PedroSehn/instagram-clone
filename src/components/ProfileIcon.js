import React from 'react';
import PropTypes from 'prop-types';
import '../styles/profileIcon.scss';

function ProfileIcon(props) {
    const { iconSize, storyBorder, image } = props;
    
    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let ramdomId = getRandomInt(1, 70);
    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${ramdomId}`;

    return (
        <div className={ storyBorder ? 'storyBorder' : ''}>
            <img className={ `profileIcon ${iconSize}`} src={ profileImage } alt="profileImage"></img>
        </div>
    )
}

export default ProfileIcon;

ProfileIcon.propTypes = {
    iconSize: PropTypes.string,
    storyBorder: PropTypes.bool,
    image: PropTypes.path,
  };