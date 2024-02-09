import { useContext, useState } from "react"
import { CounterContext } from "../context/Apicontext"
import { useNavigate } from "react-router-dom"


export default function Pokemon(){

    const {pokemon}= useContext(CounterContext)
    const [nombre,setNombre] = useState("")
    const navigate= useNavigate()
    const irAPokemon = () =>{

        
        navigate(`/pokemon/${nombre}`)
        

    }

    const handleSelect= (e)=>{
        setNombre(e.target.value)
        
        
    }
    return(

        <div className="layout__pokemon">
            <h1>Buscar Pokemon</h1>
            <select onChange={(e)=>handleSelect(e)} className="pokemon__select">
                <option value={null} >Seleccionar un pokemon</option>
                {pokemon.map((ele,id)=>(
                    <option value={ele.name} key={id}>{ele.name}</option>
                ))}
            </select>
           <button onClick={irAPokemon} className="pokemon__btn" >Ver Detalles</button>
        </div>
    )


}