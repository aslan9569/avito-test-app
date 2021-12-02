import React, {useEffect, useState} from 'react';
import './modal.css'
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { loadPhotosComments } from "../redux/actions";
import ReactLoading from 'react-loading';


function Modal({active, setActive}) {
    const params = parseInt(useParams().id);
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.items);
    const loading = useSelector(state => state.comments.loading);

    const [commentDate, setCommentDate] = useState('');
    const [commentText, setCommentText] = useState('');

    const [comment, setComment] = useState([
        {   id: 237,
            comment: 'Завидую белой завистью!!',
            date: '26.10.2021',
        },
        {   id: 238,
            comment: 'Естественно!!!',
            date: '20.11.2021',
        },
        {   id: 239,
            comment: 'Ну конечно!!',
            date: '16.11.2021',
        },
        {   id: 240,
            comment: 'Быть тупым это норма!!',
            date: '02.12.2021',
        },
        {   id: 241,
            comment: 'Не жизнь, а малина!',
            date: '22.11.2021',
        },
        {   id: 242,
            comment: 'Окееей',
            date: '13.11.2021',
        }
    ]);
    console.log(comment)
    const handleClickButton = () => {
          setComment([...comment,{id: params, date: commentDate, comment: commentText}])
            setCommentDate('')
            setCommentText('')
    }



    useEffect(() => {
        dispatch(loadPhotosComments(params))
    }, [dispatch,params]);

    const handleDateChange = (e) => {
        setCommentDate(e.target.value)
    };
    function handleCommentChange(e) {
        setCommentText(e.target.value)
    };



    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {loading ? (
                    <div className="loading">
                        <ReactLoading type="spin" color="blue" width={30} height={30} />
                    </div>
                ) : (
                    <div className="comments-container">
                        <div className="photo-container">
                            <img src={comments.url} alt=""/>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Дата"
                                    value={commentDate}
                                    onChange={handleDateChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Ваш комментарий"
                                    value={commentText}
                                    onChange={handleCommentChange}
                                />
                            </form>
                            <div
                                className="btn"
                                onClick={handleClickButton}
                            >Оставить комментарий</div>
                        </div>
                        <div className="comments">
                            <div className="comment-text">
                                {/*{comments.comments && comments.comments.map(item => {*/}
                                {/*    return (<div key={item.id}>*/}
                                {/*        <div className="date">*/}
                                {/*            {item.date}*/}
                                {/*        </div>*/}
                                {/*        <div className="text">*/}
                                {/*            {item.text}*/}
                                {/*        </div>*/}
                                {/*    </div>);*/}
                                {/*})}*/}
                            </div>
                            {comment.map(item => {
                                    if (item.id === params) {
                                        return (
                                            <div className="comment-text-block">
                                                <div className="date">
                                                    {item.date}
                                                </div>
                                                <div className="text">
                                                    {item.comment}
                                                </div>
                                            </div>
                                        );
                                    }
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;