import {Link} from "react-router-dom";


function Photo(props) {

    return (
        <div className="photos" >
            <Link to={`/${props.photo.id}`}>
                <div>
                    <img src={props.photo.url} alt="" onClick={() => props.setModalActive(true)} />
                </div>
            </Link>
        </div>
    );
}

export default Photo;