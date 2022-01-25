import React from 'react';
import '../styles/Navigation.scss'
import instagramLogo from '../images/instagram-logo.png';
import searchLogo from '../images/search-logo.png';
import Menu from './Menu.js'

function Navigation(){
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={ instagramLogo } alt='instagram logo'/>
                <div className="search">
                    <img className="searchIcon" src={ searchLogo } alt='searchIcon'/>
                    <spam className="searchText">Search</spam>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation;