import { useState } from "react"
import { useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom"
import PuffLoader from "react-spinners/PuffLoader";

function PokemonDetails() {
  const params = useParams()
  const [ detalles , setDetalles ]= useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    setDetalles(null)

    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      //setTimeout(()=>{//!solo lo ponemos de prueba como espera al fetch (simulando una situacion real)
        setDetalles(response)
      //},500)//!medio segundo de prueba
      
    })
    .catch((error)=>{
      //console.log(error)
      navigate("/error")
    })


  },[params])

  if(detalles===null){
    return <div><PuffLoader size={40} margin={10} color="darkred" /></div>
  }

  return (
    <div>
      <h3>Detalles del pokemon:</h3>
      <h4>{detalles.name}</h4>
        <div>
          <p>Nº: {detalles.id}</p>
          <p>Altura: {detalles.height/10} m</p>
          <img src={detalles.sprites.front_default} alt="poke" />
        </div>
    </div>
  )
}

export default PokemonDetails