import { useEffect } from "react";
import { useNews } from "../hooks/useNews";
import loading from "../assets/loading.gif";

export const NewsList = ({ mode, fechaDesde, fechaHasta, palabrasClave }) => {
  const { news, fetchNews, page, setPage, isLoading } = useNews({
    mode,
    fechaDesde,
    fechaHasta,
    palabrasClave,
  });

  useEffect(() => {
    fetchNews();
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchNews();
  };

  const handleClickPaginatorPrev = (e) => {
    e.preventDefault();
    if (page != 1) {
      setPage(Number(page) - 1);
    }
  };

  const handleClickPaginatorNext = (e) => {
    e.preventDefault();
    setPage(Number(page) + 1);
  };

  return (
    <>
      {mode == "buscar" ? (
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="d-flex flex-row-reverse">
            <button type="submit" className="search-button">
              Buscar
            </button>
          </div>
          <hr />
        </form>
      ) : null}
      {isLoading && (
        <div className="text-center">
          <img src={loading} alt="Cargando..." width={40} height={40} />
        </div>
      )}
      <div className="news-list">
        {news.map((article, id) => (
          <div key={id} className="news-card">
            <p>{new Date(article.publishedAt).toLocaleDateString("es-AR")}</p>
            <img src={article.urlToImage} />
            <h5>{article.title}</h5>
            <p>{article.description}</p>
            <a href={article.url} target="_blank">
              Ver Más...
            </a>
          </div>
        ))}
      </div>
      <hr></hr>
      <form className="row g-3">
        <div className="col-sm">
          <nav
            aria-label="Page navigation example"
            className="d-flex flex-row-reverse"
          >
            <ul className="pagination">
              <li className="page-item" onClick={handleClickPaginatorPrev}>
                <a className="page-link" href="#">
                  &#60;
                </a>
              </li>
              <li className="page-item" onClick={handleClickPaginatorNext}>
                <a className="page-link" href="#">
                  {page}
                </a>
              </li>
              <li className="page-item" onClick={handleClickPaginatorNext}>
                <a className="page-link" href="#">
                  &#62;
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </form>
    </>
  );
};
