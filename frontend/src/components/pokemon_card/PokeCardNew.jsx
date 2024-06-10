import React, { useState } from "react";
import HpBar from "./HpBar";
import getTypeColor from "./TypeColor";
import PokemonStats from "./PokemonStats";

const PokeCardNew = ({ pokemon }) => {
  const [hp, setHp] = useState(pokemon.base.HP);

  return (
    <div className='rounded-lg bg-white  shadow-md w-64 h-96 content-start'>
      <div className='flex flex-col items-center '>
        <h2 className='text-xl text-slate-200 font-semibold mb-2 bg-zinc-900 w-full rounded-t-lg p-2 text-center '>
          {pokemon.name.english}
        </h2>
        {/* Type Container */}
        <p className='m-2 flex items-center justify-center'>
          <span className='bg-gray-100 text-gray-800 text-sm font-bold text-center me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-amber-400 border border-gray-500'>
            TYPE:{" "}
          </span>
          {pokemon.type.map((type, index) => (
            <span key={index} className={`${getTypeColor(type)} `}>
              {type}
            </span>
          ))}
        </p>
        {/* Image */}
        <img
          src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name.english.toLowerCase()}.png`}
          alt={pokemon.name.english}
          className='size-48 p-3'
        />
        {/* HpBar */}
        <HpBar maxHp={pokemon.base.HP} hp={hp} />
        {/* Stats */}
        <div>
          <PokemonStats pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default PokeCardNew;
