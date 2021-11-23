import Carcard from '../../components/Carcard';
import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';
import './styles.css';

export default function Catalog() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Searchbar />
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <Carcard />
          </div>
        </div>
      </div>
    </>
  );
}
