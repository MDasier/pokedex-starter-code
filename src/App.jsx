import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PokemonDetails from './pages/PokemonDetails'

function App() {

  return (
    <>

      <Navbar /> 

      <div className='app-container'>

        <Sidebar />

        <div className='page'>
          <Routes>

            <Route path={"/"} element={ <Home />}/>
            <Route path={"/pokemon/:pokemonName"} element={ <PokemonDetails />}/>

            {/* error handling routes */}
            <Route path={"*"} element={ <NotFound />}/>

          </Routes>
        </div>
      
      </div>  

    </>
  )
}

export default App
