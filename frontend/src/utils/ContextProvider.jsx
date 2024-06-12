import {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext();

export const UseContextStore = () => useContext(Context);

export const ContextProvider = ({children}) => {

	const [playerName, setPlayerName] = useState('unknown');
	const [pokemonData, setPokemonData] = useState(null);
	const [bnbn, setBnbn] = useState(null);
	useEffect(() => {

	}, []);

	const values = {
		playerName,
		pokemonData,
		setPlayerName,
		setPokemonData,
		bnbn,
		setBnbn,
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
}
