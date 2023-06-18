import React, { useState, useEffect } from 'react';
import '../styles/pokedex.css';

function Pokemon() {

    const [pokemon, setPokemon] = useState([]);
    const [input, setInput] = useState('bulbasaur');

    //API call to get pokemon results
    useEffect (() =>  {
        const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setPokemon(res)
        })
        .catch(console.error)
    }, [input]);

    function handleInput(e) {
        e.preventDefault();
        let textInput = document.querySelector('#pokemonInput');
        setInput(textInput.value);
    }

    if (!pokemon.sprites && !pokemon.types) {
        <div className='main-container'>
            LOADING....
        </div>
    } else {
        if (pokemon) {
            return (
                <div className='main-container'>
                    <div className='pokedex-container'>
                        <div className='left-container'>
                            <div className='top-left-screen'>
                                <img src={pokemon.sprites.other["official-artwork"].front_default}/>
                            </div>
                            <div className='search-container'>
                                <button type="submit" onClick={handleInput}>GO</button>
                                <input type="text" id="pokemonInput" placeholder="Search Pokedex"></input>
                            </div>
                            <div className='bottom-left-screen'>
                                <h3 className='name'>Name: {pokemon.name}</h3>
                                <h3 className='type'>Type: {pokemon.types[0].type.name}</h3>
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className='right-screen'>
                                <h3>Number: {pokemon.id}</h3>
                                <div>
                                    <h3 className='abilities'>Abilities:
                                        <ul>
                                            <li>{pokemon.abilities[0].ability.name}</li>
                                            <li>{pokemon.abilities[1].ability.name}</li>
                                        </ul>
                                    </h3>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Pokemon;