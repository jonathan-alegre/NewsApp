import { useState } from "react";

export const useNews = ({ mode, fechaDesde, fechaHasta, palabrasClave }) => {  
  const port = "7098";
  
  const urlBaseNews =
    mode == "headlines"
      ? `https://localhost:${port}/api/news/top-headlines`      
      : `https://localhost:${port}/api/news/search`;
  
  const pageSize = 9;
  const paisBase = "ar";  
  const palabraClaveDefault = "argentina";  
  const fechaDesdeDefault = '01/01/2024';
  const fechaHastaDefault = new Date().toLocaleDateString();

  const [page, setPage] = useState(1);  
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchNews = async () => {
    try {
      setIsLoading(true);

      let url = "";
      if (mode == "headlines") {        
        url = `${urlBaseNews}?country=${paisBase}&page=${page}&pageSize=${pageSize}`;        
      } else {      
        url = `${urlBaseNews}?dateFrom=${fechaDesde != '' ? fechaDesde : fechaDesdeDefault}&dateTo=${fechaHasta != '' ? fechaHasta : fechaHastaDefault}&keyWords=${palabrasClave != '' ? palabrasClave : palabraClaveDefault}&page=${page}&pageSize=${pageSize}`;
      }      
      const response = await fetch(url);      
      const data = await response.json();      
      if (data.length > 0) {
        setNews(data);
      } else setPage(page - 1);

      setIsLoading(false);
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };
   
  return {
    news,
    fetchNews,
    page,
    setPage,
    isLoading
  };
};
