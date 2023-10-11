import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import Home from './components/Home';
import Info from './components/Info';
import Creaciones from './components/Creaciones';
import Favoritos from './components/Favoritos';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/info' element={<Info />}></Route>
            <Route path='/creaciones' element={<Creaciones />}></Route>
            <Route path='/favoritos' element={<Favoritos />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
//  Home, Info de ustedes, Mis Creaciones, favoritos
export default App
