import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";
import {Route} from "react-router-dom";
import Modal from "../modal/Modal";

function Photos(props) {
    const photos = useSelector(state => state.photos.items);
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="block-photo">
            {photos.map(photo => {
                return <Photo key={photo.id} photo={photo} setModalActive={setModalActive} />
            })}
            <Route path="/:id?">
                <Modal active={modalActive} setActive={setModalActive} />
            </Route>
        </div>
    );
}

export default Photos;