import React from 'react'
import { useState, useEffect } from 'react'
import "./Card.css"

const url = "https://rickandmortyapi.com/api/character"

const card = () => {

    const [person, setPerson] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url)
    
            const data = await res.json()
    
            setPerson(data.results)
        }
            fetchData()
        }, [])

    return (
        <div>
            <ul>
                {person.map((feature) => (
                    <li key={feature.id}>
                        <img src={feature.image} alt="foto do personagem" />
                        <p><span>Nome:</span> {feature.name}</p>

                        <p><span>Gênero:</span> {feature.gender}</p>

                        <p><span>Espécies:</span> {feature.species}</p>
                        {console.log(feature)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default card