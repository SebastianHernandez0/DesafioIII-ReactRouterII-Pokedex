import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export const CounterContext= createContext()
export default function Apicontext({children}){

    const [pokemon,setPokemon]= useState([])

    const getApi = async() => {
        const apiUrl= "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800"
        const response= await fetch(apiUrl)
        const data= await response.json()
        setPokemon(data.results)
        
        
    }

    useEffect(()=>{
        getApi()
    },[])


    return(
        <CounterContext.Provider value={{pokemon}}>{children}</CounterContext.Provider>
    )
}