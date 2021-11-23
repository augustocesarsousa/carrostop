import Carcard from '../../components/Carcard';
import Searchbar from '../../components/Searchbar';

export default function Catalog() {
  return (
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
  );
}
