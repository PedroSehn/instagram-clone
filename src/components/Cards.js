import React from 'react';
import '../styles/cards.scss'
import Card from './Card';


import Stories from './Stories';

function Cards(){
    const commentsOne = [
        {
          user: "raffagrassetti",
          text: "Woah dude, this is awesome! 🔥",
          id: 1,
        },
        {
          user: "therealadamsavage",
          text: "Like!",
          id: 2,
        },
        {
          user: "mapvault",
          text: "Niceeeee!",
          id: 3,
        },
      ];
    
      
    return (
        <div className="cards">
            <Stories/>
            <Card 
            accountName="raffagrassetti" 
            image="https://picsum.photos/800/900"
            comments={ commentsOne }
            likedByText="PeterP"
            hours={15}
            />
            <Card 
            accountName="therealadamsavage" 
            image="https://picsum.photos/800/1000"
            comments={ commentsOne }
            likedByText="LukeK"
            hours={15}
            />
            <Card 
            accountName="HebertRichards" 
            image="https://picsum.photos/800/950"
            comments={ commentsOne }
            likedByText="TonyStark"
            hours={15}
            />
            <Card 
            accountName="lost_fair" 
            image="https://picsum.photos/800/1001"
            comments={ commentsOne }
            likedByText="blueBird"
            hours={15}
            />
            <Card 
            accountName="lost_fair" 
            image="https://picsum.photos/800/940"
            comments={ commentsOne }
            likedByText="blueBird"
            hours={15}
            />
            <Card 
            accountName="lost_fair" 
            image="https://picsum.photos/800/700"
            comments={ commentsOne }
            likedByText="blueBird"
            hours={15}
            />
            <Card 
            accountName="lost_fair" 
            image="https://picsum.photos/800/400"
            comments={ commentsOne }
            likedByText="blueBird"
            hours={15}
            />
            <Card 
            accountName="lost_fair" 
            image="https://picsum.photos/800/930"
            comments={ commentsOne }
            likedByText="blueBird"
            hours={15}
            />
            <Card 
            accountName="lost_fair" 
            image="https://picsum.photos/800/460"
            comments={ commentsOne }
            likedByText="blueBird"
            hours={15}
            />
        </div>
    )
}

export default Cards;