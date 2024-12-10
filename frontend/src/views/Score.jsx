//import vocemod from "../assets/pokemon-voicemod.mp3";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import boxring from "../assets/boxring2.jpg";
import pokefightarena from "../assets/fontpokefightarena.png";
import ranking from "../assets/fontRankingblk.png";
import trophy from "../assets/poketrophygold-removedbg.png";
import PulseButton from "../components/PulseButton.jsx";
import RankingTable from "../components/RankingTable.jsx";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import {addPlayer, updatePlayer} from "../utils/queries.js";

function Score() {

	//const voiceMod = new Audio(voicemod);
	const {playerData, setPlayerData, playerName, playerId} = UseContextStore();
	const navigate = useNavigate();

	// find existing player with its score entries
	const existingPlayer = playerData.filter(item => item.name === playerName)[0];

	// calculate the score of the current player (either new or existing player)
	const newScoreOfPlayer = () => {
		let matches = (existingPlayer) ? existingPlayer.matches : 0;
		let wins = (existingPlayer) ? existingPlayer.wins : 0;
		return {
			name: playerName,
			matches: matches + 1,
			wins: wins
		};
	}

	// create empty newPlayerData array
	let newPlayerData = [];

	// if game started with a new player
	if (!playerId && playerName !== null) {
		newPlayerData = playerData;
		newPlayerData.push(newScoreOfPlayer());
	}

	// if game started with an existing player
	if (playerId && playerName !== null) {
		let score = newScoreOfPlayer();
		newPlayerData = playerData.map(obj => {
			if (obj.name === playerName) {
				return {
					...obj,
					name: score.name,
					matches: score.matches,
					wins: score.wins
				}
			} else {
				return obj;
			}
		});
	}

	// Sortiert die Spieler nach dem Verhältnis Wins / Matches. ( Überschreibt die vordefinierten Ränge oben.)
	newPlayerData.sort((a, b) => b.wins / b.matches - a.wins / a.matches);

	// Hier wird der Rang vergeben basierend auf der Position im sortierten Array.
	newPlayerData.forEach((player, index) => player.rank = index + 1);

	const playAgain = () => {
		navigate('/shuffle');
		//voiceMod.pause();
	}

	useEffect(() => {
		if (!playerId && playerName !== null) {
			addPlayer(newScoreOfPlayer());
		}
		if (playerId && playerName !== null) {
			updatePlayer(playerId, newScoreOfPlayer());
		}
		setPlayerData(null);
	}, []);

	return (
		<div className="relative bg-indigo-950">
			<img src={boxring} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">
					<img src={pokefightarena} alt="Pokefight-Arena" className="w-full max-w-[500px]"/>
					<div className='w-full max-w-[500px] mt-12'>
						<img src={trophy} alt="Trophy" className="max-w-80 mx-auto"/>
						<img src={ranking} alt='Ranking' className='w-full max-w-60 my-8 mx-auto '/>
						<RankingTable players={newPlayerData}/>
					</div>
					<div className="mt-4 flex justify-center">
						<PulseButton view="score" handleClick={playAgain}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Score;
