import React from 'react';
import '../styles/comments.scss';
import PropTypes from 'prop-types';

function Comments(props) {
    const { 
        accountName,
        comment,
    } = props;
    
    return (
   <div className="commentContainer">
       <div className="accountName"> { accountName }</div>
       <div className="comment"> { comment }</div>
   </div>
   )
}

export default Comments;

Comments.propTypes = {
    accountName: PropTypes.string,
    comment: PropTypes.string,
};