import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPhotos } from "../redux/actions";
import Header from "./Header/Header";
import Photos from "./Main/Photos";
import Footer from "./Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
