import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemon from './views/Pokemon'
import Apicontext from './context/Apicontext'
import PokemonDetalles from './views/PokemonDetalles'

function App() {
  

  return (
    <div className='layout'>
      <Navbar></Navbar>
      <Routes>
      
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/pokemon/' element={<Pokemon></Pokemon>}></Route>
        <Route path='/pokemon/:name' element={<PokemonDetalles></PokemonDetalles>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
