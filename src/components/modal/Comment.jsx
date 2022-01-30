import React from "react";
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <div className="comment-text-block">
      <div className="date">{props.item.name}</div>
      <div className="text">{props.item.comment}</div>
    </div>
  );
}
Comment.propTypes = {
  item: PropTypes.object
}

export default Comment;