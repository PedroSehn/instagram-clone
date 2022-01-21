import React from 'react';
import '../styles/suggestions.scss';
import Profile from './Profile';


function Suggestions(){
    return (<div className="suggestions">
        <div className="titleContainer">
            <div className="title">Suggestions For You</div>
            <a href="/">See All</a>
        </div>
        <Profile 
        caption="Followed by _abyzzou_"
        urlText='Follow'
        iconSize='medium'
        captionSize='small'/>
        <Profile 
        caption="Followed by gab_fb_"
        urlText='Follow'
        iconSize='medium'
        captionSize='small'/>
        <Profile 
        caption="Followed by peculiarfairy_"
        urlText='Follow'
        iconSize='medium'
        captionSize='small'/>
        <Profile 
        caption="Followed by sonic_thh"
        urlText='Follow'
        iconSize='medium'
        captionSize='small'/>
        <Profile 
        caption="Followed by peculiarfairy_"
        urlText='Follow'
        iconSize='medium'
        captionSize='small'/>

    </div>
    )
}

export default Suggestions;