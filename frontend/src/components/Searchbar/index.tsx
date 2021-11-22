import './styles.css';

const Searchbar = () => {
  return (
    <>
      <div className="search-container bg-light">
        <input
          type="search"
          className="form-control"
          placeholder="Digite sua busca"
        />

        <button type="button" className="btn btn-primary">
          Buscar
        </button>
      </div>
    </>
  );
};

export default Searchbar;
