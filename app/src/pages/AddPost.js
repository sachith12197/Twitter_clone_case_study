import React from "react";
import "../Styles/pages/addPost.css";

import { connect } from "react-redux";
import { addPost } from "../actions";

const AddPost = ({ dispatch }) => {
  let input;

  return (
    <div className="header-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addPost(input.value));
          input.value = "";
        }}
      >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          ref={node => (input = node)}
          placeholder="What's on your mind?"
        />
        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default connect()(AddPost);
