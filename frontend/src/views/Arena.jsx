import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../utils/context.js";

import Shuffle from "./Shuffle.jsx";
import Fight from "./Fight.jsx";
import Result from "./Result.jsx";
import Score from "./Score.jsx";

function Arena() {

	// get context variables
	const shuffleState = useContext(StoreContext);
	const fightState = useContext(StoreContext);
	const resultState = useContext(StoreContext);
	const scoreState = useContext(StoreContext);

	// get and set state variables
	const [isLoading, setIsLoading] = useState(true);
	const [isShuffle, setIsShuffle] = useState(shuffleState);
	const [isFight, setIsFight] = useState(fightState);
	const [isResult, setIsResult] = useState(resultState);
	const [isScore, setIsScore] = useState(scoreState);

	useEffect(() => {
		setTimeout(()=> {
			setIsLoading(false);
			setIsShuffle(true);
		}, 1000);
	}, []);

	const viewStates = [
		[isShuffle, setIsShuffle],
		[isFight, setIsFight],
		[isResult, setIsResult],
		[isScore, setIsScore]
	];

	const loadingSpinner = (
		<div>LOADING ...</div>
	);

	const scene = (
		<>
			{(isShuffle) && <StoreContext.Provider value={viewStates}><Shuffle/></StoreContext.Provider>}
			{(isFight) && <StoreContext.Provider value={viewStates}><Fight/></StoreContext.Provider>}
			{(isResult) && <StoreContext.Provider value={viewStates}><Result/></StoreContext.Provider>}
			{(isScore) && <StoreContext.Provider value={viewStates}><Score/></StoreContext.Provider>}
		</>
	);

	return (
		<div className="arena">
			<div className="arena-inner">
				{isLoading ? loadingSpinner : scene}
			</div>
		</div>
	)
}

export default Arena;
