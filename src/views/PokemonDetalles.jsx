import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function PokemonDetalles(){


    const [pokemon,setPokemon]= useState([])
    const [stats,setStats]= useState([])
    const [sprites,setSprites]=useState([])
    const [spritesHome,setSpritesHome]=useState([])
    const [tipo,setTipo] = useState([])
    const {name}= useParams()
    const navigate=useNavigate()
    const volver = ()=>{
        navigate(`/pokemon`)
    }
    const getPokemon = async() => {
        const apiUrl= "https://pokeapi.co/api/v2/pokemon/"+name
        const response= await fetch(apiUrl)
        const data= await response.json()
        setPokemon(data)
        setStats(data.stats)
        setSprites(data.sprites.other.dream_world)
        setSpritesHome(data.sprites.other.home)
        setTipo(data.types)
        

        
    }


    useEffect(()=>{
        getPokemon()
    },[name])

    return(
        <div className="pokemon__detalle">
            <h1>{pokemon.name}</h1>
            <img src={sprites.front_default || spritesHome.front_default }></img>
            <h5>Tipo:{tipo.map((tipo,id)=>(
                <p key={id}>{tipo.type.name}</p>

            ))} </h5>
            <ul>
                {stats.map((stat,id)=>(
                    <li key={id}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
            
            <button onClick={volver}>Volver</button>
        </div>
    )
}