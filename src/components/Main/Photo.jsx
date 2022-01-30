import { Link } from "react-router-dom";
import classes from "./main.module.css";
import PropTypes from 'prop-types';

function Photo(props) {
  return (
    <div className={classes.photos}>
      <Link to={`/${props.photo.id}`}>
        <div>
          <img
            src={props.photo.url}
            alt=""
            onClick={() => props.setModalActive(true)}
          />
        </div>
      </Link>
    </div>
  );
}
Photo.propTypes = {
  photo: PropTypes.object,
  setModalActive: PropTypes.func
}

export default Photo;