import React from 'react';
import '../styles/card.scss';
import PropTypes from 'prop-types';
import Profile from './Profile';
import { ReactComponent as CardDots } from '../images/dots.svg';
import { ReactComponent as Emoji } from '../images/emoji-button.svg';
import CardMenu from './CardMenu';
import Comments from './Comments';

function Card (props){
    const { 
        storyBorder,
        image,
        comments,
        likedByText,
        hours
    }= props;
    
    return (
        <div className="card">
          <header>
            <Profile iconSize="medium" storyBorder={storyBorder} />
            <CardDots className="cardButton" />
          </header>
          <img className="cardImage" src={image} alt="card content" />
          <CardMenu />
          <div className="likedBy">
            <Profile iconSize="small" hideAccountName={true} />
            <span>
              Liked by <strong>{likedByText}</strong> and others
            </span>
          </div>
          <div className="comments">
            {comments.map((comment) => {
              return (
                <Comments
                  key={comment.id}
                  accountName={comment.user}
                  comment={comment.text}
                />
              );
            })}
          </div>
          <div className="timePosted">{hours} HOURS AGO</div>
          <div className="addComment">
            <Emoji className="icon"/>
            <div className="commentText">Add a comment...</div>
            <div className="postText">Post</div>
          </div>
        </div>
      );
    }

export default Card;

Card.propTypes = {
    storyBorder: PropTypes.string,
    comments: PropTypes.string,
    likedByText: PropTypes.string,
    likedByNumber: PropTypes.string,
    hours: PropTypes.string,
    image: PropTypes.string,
  };