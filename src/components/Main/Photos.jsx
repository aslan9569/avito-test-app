import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Photo from "./Photo";
import Modal from "../modal/Modal";
import classes from "./main.module.css";

function Photos(props) {
  const photos = useSelector((state) => state.photos.items);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.blocPhoto}>
      {photos.map((photo) => {
        return (
          <Photo photo={photo} setModalActive={setModalActive} key={photo.id} />
        );
      })}
      <Route path="/:id?">
        <Modal active={modalActive} setActive={setModalActive} />
      </Route>
    </div>
  );
}

export default Photos;