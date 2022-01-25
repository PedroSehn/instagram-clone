import React from 'react';
import '../styles/sidebar.scss'
import Sticky from 'react-sticky-el';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from './Fotter';
import image from '../images/profile-image.jpeg'

function Sidebar(){
    return (
            <Sticky topOffset={ -80 }>
                <div className="sidebar">
                    <Profile 
                    username="PedroSehn" 
                    caption="Pedro Sehn" 
                    captionSize="small"
                    urlText="Switch" 
                    iconSize="big" 
                    image={ image }/>
                    <Suggestions />
                    <Footer />
                </div>
            </Sticky>
    )

}

export default Sidebar;