import "../styles/buscador.css";
import { NewsList } from "../components/NewsList";
import { SelectPaises } from "../components/SelectPaises";

export const UltimasNoticias = () => {  
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row-reverse">
          <SelectPaises></SelectPaises>
        </div>
        <hr/>     
        <NewsList mode='headlines'></NewsList>   
      </div>
    </>
  );
};
