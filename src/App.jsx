
import { Routes, Route, Navigate } from 'react-router-dom'
import {NavBar} from './components/NavBar'
import { BuscadorNoticias } from './routes/BuscadorNoticias'
import { UltimasNoticias } from './routes/UltimasNoticias'

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <hr />

      <Routes>        
       <Route path='/' element={<UltimasNoticias></UltimasNoticias>}></Route>
        <Route path='ultimasnoticias' element={<UltimasNoticias></UltimasNoticias>}></Route>
        <Route path='buscadornoticias' element={<BuscadorNoticias></BuscadorNoticias>}></Route>
        <Route path='/*' element={<Navigate to='/' />}></Route> 
      </Routes> 

    </>
  )
}