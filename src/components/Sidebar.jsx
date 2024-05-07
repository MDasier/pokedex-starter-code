import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Sidebar() {
  // https://pokeapi.co/api/v2/pokemon
  const [ listaPokemons, setListaPokemons] = useState([])
  useEffect(()=>{

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      setListaPokemons(response.results)
      //console.log(listaPokemons)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])

  return (
    <nav className="sidebar">

      {listaPokemons.map((cadaPokemon,index) => {
        return (
          <Link to={`/pokemon/${cadaPokemon.name}`} key={index}><p>{cadaPokemon.name.toUpperCase()}</p></Link>
        )
      })}

    </nav>
  )
}

export default Sidebar