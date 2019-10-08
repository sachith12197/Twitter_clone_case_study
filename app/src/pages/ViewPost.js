import React from "react";
import "../Styles/pages/viewPost.css";
import "../Styles/fontawarsome/css/all.css";

import { connect } from "react-redux";
import { deletePost } from "../actions";
import { favorPost } from "../actions";

const ViewPost = ({ dispatch, postKey, post, renderFavor }) => {
  return (
    <div className="header-container">
      <div key={postKey} className="post-container">
        {post.text}
        <div>
          {post.favor ? (
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(favorPost(post.id, post.favor));
              }}
              className="button-div"
            >
              <i class="fas fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(favorPost(post.id, post.favor));
              }}
              className="button-div"
            >
              <i class="far fa-heart"></i>
            </button>
          )}
          {!!!renderFavor && (
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(deletePost(post.id));
              }}
              className="button-div"
            >
              <i class="far fa-window-close"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect()(ViewPost);
