import Header from "./Header";
import Photos from "./Photos";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadPhotos} from "../redux/actions";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos())
    }, [dispatch])


  return (
    <div className="container">
        <Header />
        <Photos />
        <Footer />
    </div>
  );
}

export default App;
