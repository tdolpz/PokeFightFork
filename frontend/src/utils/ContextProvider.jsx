import {createContext, useContext, useEffect, useState} from 'react';

const Context = createContext();

export const UseContextStore = () => useContext(Context);
export const ContextProvider = ({children}) => {

	const [playerName, setPlayerName] = useState('unknown');

	useEffect(() => {
	}, []);

	const values = {
		playerName,
		setPlayerName
	};

	return <Context.Provider value={values}>{children}</Context.Provider>;
}
