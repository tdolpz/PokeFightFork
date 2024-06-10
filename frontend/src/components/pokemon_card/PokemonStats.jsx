import React from "react";
// Komponente für die Atk und Def Stats.
function PokemonStats({ pokemon }) {
  const attack = pokemon.base.Attack;
  const spAttack = pokemon.base["Sp. Attack"];
  const defense = pokemon.base.Defense;
  const spDefense = pokemon.base["Sp. Defense"];
  return (
    <>
      <div className='flex mb-4'>
        <div className='flex flex-col gap-1'>
          <p className=' text-xs font-bold ml-2 me-1 mt-2 px-2.5 py-0.5 rounded dark:bg-red-500 dark:text-white'>
            Attack: {attack}
          </p>
          <p className=' text-xs font-bold ml-2 me-1  px-2.5 py-0.5 rounded dark:bg-yellow-500 dark:text-white'>
            SpAttack: {spAttack}
          </p>
        </div>
        <div className='ml-auto flex flex-col gap-1'>
          <p className=' text-xs font-bold me-2 mt-2 px-2.5 py-0.5 rounded dark:bg-blue-500 dark:text-white '>
            Defense: {defense}
          </p>
          <p className=' text-xs font-bold me-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-white'>
            SpDefense: {spDefense}
          </p>
        </div>
      </div>
    </>
  );
}

export default PokemonStats;
