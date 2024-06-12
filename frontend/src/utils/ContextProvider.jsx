import {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext();
export const UseContextStore = () => useContext(Context);
export const ContextProvider = ({children}) => {

	const [playerName, setPlayerName] = useState('unknown');
	const [pokemonData, setPokemonData] = useState(null);
	const [openCard1, setOpenCard1] = useState(null);
	const [openCard2, setOpenCard2] = useState(null);

	useEffect(() => {
	}, []);

	const values = {
		playerName,
		pokemonData,
		setPlayerName,
		setPokemonData,
		openCard1,
		setOpenCard1,
		openCard2,
		setOpenCard2
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
}
