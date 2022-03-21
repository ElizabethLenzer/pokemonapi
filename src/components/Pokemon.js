import React, { useState } from "react";

const Pokemon = (props) => {

    const [PokemonList, SetPokemonList] = useState([]);

    const GetPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                SetPokemonList(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container-fluid text-center mt-5">
            <button className="btn btn-lg btn-success" onClick={GetPokemon}>
                Fetch Pokemon
            </button>
            <ul className="mt-5 list-unstyled">
                {PokemonList.length > 0 &&
                    PokemonList.map((pokemon, index) => {
                        return <li key={index}>{pokemon.name}</li>;
                    })}
            </ul>
        </div>
    );
}

export default Pokemon;