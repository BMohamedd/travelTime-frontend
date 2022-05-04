import React from "react";
import Creator from "./Creator";
import PostButtons from "./PostButtons";
import { useDispatch } from "react-redux";
import {
  deletePost,
  likePostAction,
  savePost,
} from "../../../redux/actionCreators/myPostesActionCreator";

function Poste({
  title,
  picture,
  user,
  id,
  date,
  body,
  likeCounter,
  browse,
  userId,
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(id));
  };
  const handleLike = () => {
    dispatch(likePostAction(id, userId));
  };
  const handleSavePost = () => {
    dispatch(savePost(id, userId));
  };

  return (
    <div className="card shadow-lg text-start width-auto mb-5">
      <Creator user={user} date={date} browse={browse} id={id} />
      <h5 className="ms-3">{title}</h5>
      <p className="w-75 ms-3">{body}</p>
      <div className="text-center">
        <img
          className="rounded img-fluid"
          src={
            picture ||
            `https://picsum.photos/${Math.floor(Math.random() * 1500 + 1000)}`
          }
          alt="post"
        />
      </div>
      <p className="mt-3 ms-3">
        {likeCounter === 1 ? likeCounter + " like" : likeCounter + " likes"}
      </p>
      <hr />
      <PostButtons
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleSavePost={handleSavePost}
        browse={browse}
      />
    </div>
  );
}

export default Poste;
