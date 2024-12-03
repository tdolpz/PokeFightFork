//import vocemod from "../assets/pokemon-voicemod.mp3";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import boxring from "../assets/boxring2.jpg";
import pokefightarena from "../assets/fontpokefightarena.png";
import ranking from "../assets/fontRankingblk.png";
import trophy from "../assets/poketrophygold-removedbg.png";
import PulseButton from "../components/PulseButton.jsx";
import RankingTable from "../components/RankingTable.jsx";
import {UseContextStore} from "../utils/ContextProvider.jsx";

function Score() {

	//const voiceMod = new Audio(voicemod);
	const {playerName, playerData, currentPlayerId} = UseContextStore();
	const navigate = useNavigate();
	const [players, setPlayers] = useState(playerData)


	console.log(currentPlayerId);


	const playerExists = () => {
		for (let key in playerData) {
			if (playerData[key].name === playerName) {
				console.log(playerData[key]._id);
				return true;
			}
		}
		return false;
	}


	const addPlayer = async (postData) => {
		try {
			const response = await axios.post('http://localhost:8000/player/new', postData);
			if (response.status === 201) {
				console.log('player has been added to the leader board');
			}
		} catch (error) {
			console.error(error);
		}
	}

	const updatePlayer = async (playerId, postData) => {
		try {
			const response = await axios.put('http://localhost:8000/player/' + playerId, postData);
			if (response.status === 201) {
				console.log('player has been updated');
			}
		} catch (error) {
			console.error(error);
		}
	}

	const saveResult = (playerId = '') => {

		if (!playerExists()) {
			console.log('add player');
			addPlayer({name: playerName}).then();
		} else {
			console.log('player exixts - update player');

			updatePlayer(playerId, {
				name: playerName,
				matches: 20,
				wins: 5
			}).then();
		}

	}

	/*
	const players = [
		{rank: 1, name: "Frank", matches: 50, wins: 35},
		{rank: 2, name: "Renke", matches: 45, wins: 30},
		{rank: 3, name: "Sharon", matches: 40, wins: 25},
		{rank: 4, name: "Siddhali", matches: 35, wins: 20},
		{rank: 5, name: "Daniel", matches: 30, wins: 15},
		{rank: 6, name: "Thomas", matches: 14, wins: 5},
		{rank: 7, name: "Alex", matches: 37, wins: 21},
		{rank: 8, name: "Sabrina", matches: 23, wins: 21},
		{rank: 9, name: "Ali", matches: 20, wins: 15},
		{rank: 10, name: "Michal", matches: 9, wins: 7},
	];
*/

	// Sortiert die Spieler nach dem Verhältnis Wins / Matches. ( Überschreibt die vordefinierten Ränge oben.)
	players.sort((a, b) => b.wins / b.matches - a.wins / a.matches);

	// Hier wird der Rang vergeben basierend auf der Position im sortierten Array.
	players.forEach((player, index) => player.rank = index + 1);


	console.log(players);

	const playAgain = () => {
		navigate('/shuffle');
		//voiceMod.pause();
	}


	return (
		<div className="relative bg-indigo-950">
			<img src={boxring} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">
					<img src={pokefightarena} alt="Pokefight-Arena" className="w-full max-w-[500px]"/>
					<div className='w-full max-w-[500px] mt-12'>
						<img src={trophy} alt="Trophy" className="max-w-80 mx-auto"/>
						<img src={ranking} alt='Ranking' className='w-full max-w-60 my-8 mx-auto '/>
						<RankingTable players={players}/>
					</div>
					<div className="mt-4 flex justify-center">
						<PulseButton view="score" handleClick={playAgain}/>
					</div>

					<button onClick={() => saveResult}>ADD PLAYER</button>
					<button onClick={() => saveResult(currentPlayerId)}>UPDATE PLAYER</button>

				</div>
			</div>
		</div>

	)
}

export default Score;
