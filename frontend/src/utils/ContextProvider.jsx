import {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext();
export const UseContextStore = () => useContext(Context);
export const ContextProvider = ({children}) => {

	const [playerName, setPlayerName] = useState(null);
	const [playerId, setPlayerId] = useState(null);
	const [pokemonData, setPokemonData] = useState(null);
	const [playerData, setPlayerData] = useState(null);
	const [openCard1, setOpenCard1] = useState(null);
	const [openCard2, setOpenCard2] = useState(null);
	const [gameWon, setGameWon] = useState(false);

	useEffect(() => {}, []);

	const values = {
		playerData,
		playerName,
		pokemonData,
		openCard1,
		openCard2,
		playerId,
		gameWon,
		setPlayerData,
		setPlayerName,
		setPlayerId,
		setPokemonData,
		setOpenCard1,
		setOpenCard2,
		setGameWon
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
}
