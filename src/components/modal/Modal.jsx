import React, { useEffect, useState } from "react";
import "./modal.css";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotosComments, newComment } from "../../redux/actions";
import ReactLoading from "react-loading";
import Comment from "./Comment";
import PropTypes from "prop-types";

function Modal({ active, setActive }) {
  const params = parseInt(useParams().id);
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.comments.items);
  const comments = useSelector((state) => state.comments.comments);
  const loading = useSelector((state) => state.comments.loading);

  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleClickButton = (id, name, text) => {
    dispatch(newComment(id, name, text));
  };

  useEffect(() => {
    dispatch(loadPhotosComments(params));
  }, [dispatch, params]);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div className="loading">
            <ReactLoading type="spin" color="blue" width={30} height={30} />
          </div>
        ) : (
          <div className="comments-container">
            <div className="photo-container">
              <img src={photos.url} alt="" />
              <form>
                <input
                  type="text"
                  placeholder="Имя"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Ваш комментарий"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </form>
              <div
                className="btn"
                onClick={() =>
                  handleClickButton(params, commentName, commentText)
                }
              >
                Оставить комментарий
              </div>
            </div>
            <div className="comments">
              {comments.map((item) => {
                if (item.id === params) {
                  return <Comment item={item} key={item.id} />;
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default Modal;
