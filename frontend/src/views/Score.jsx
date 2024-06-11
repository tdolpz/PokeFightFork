import { useNavigate } from "react-router-dom";
import PulseButton from "../components/PulseButton.jsx";
import ranking from "../assets/fontRankingblk.png";
import firstPlace from "../assets/FirstPlace.png";
import secondPlace from "../assets/SecondPlace.png";
import thirdPlace from "../assets/ThirdPlace.png";
import fontpokefightarena from "../assets/fontpokefightarena.png";
import trophy from "../assets/poketrophygold-removedbg.png";


function Score() {

	const navigate = useNavigate();

	const playAgain = () => {
		navigate('/arena/shuffle');
	}

	const players = [
		{ rank: 1, name: "Frank", matches: 50, wins: 35 },
		{ rank: 2, name: "Renke", matches: 45, wins: 30 },
		{ rank: 3, name: "Sharon", matches: 40, wins: 25 },
		{ rank: 4, name: "Siddhali", matches: 35, wins: 20 },
		{ rank: 5, name: "Daniel", matches: 30, wins: 15 },
		{ rank: 6, name: "Thomas", matches: 14, wins: 5 },
		{ rank: 7, name: "Alex", matches: 37, wins: 21 },
		{ rank: 8, name: "Sabrina", matches: 23, wins: 21 },
		{ rank: 9, name: "Ali", matches: 20, wins: 15 },
		{ rank: 10, name: "Michal", matches: 9, wins: 7 },
	];

	// Sortiert die Spieler nach dem Verhältnis Wins / Matches. ( Überschreibt die vordefinierten Ränge oben.)
	players.sort((a, b) => b.wins/b.matches - a.wins/a.matches);

	// Hier wird der Rang vergeben basierend auf der Position im sortierten Array.
	players.forEach((player, index) => {
		player.rank = index + 1;
	});

	return (
		<>
			<div className={"max-w-[500px] mb-8"}>
				<img src={fontpokefightarena} alt="Pokefight-Arena" />
			</div>

			<div className='w-full max-w-[500px] mt-12'>
				<img src={trophy} alt="Trophy" className="max-w-80 mx-auto" />
				<img src={ranking} alt='Ranking' className='w-full max-w-60 my-8 mx-auto '/>
				<div className='overflow-y-auto h-80'>
					<div className="bg-orange-400 text-lg text-black font-bold underline decoration-double flex items-center rounded pt-1 pb-2 mb-2">
						<span className="w-14 text-center">Rank</span>
						<span className="text-left flex-1 pl-4">Player</span>
						<span className="text-center w-24">Matches</span>
						<span className="text-center w-24">Wins</span>
					</div>
					{players.map((player, index) => (
						<div className="bg-orange-200 text-lg text-black flex items-center h-10 rounded mb-2" key={index}>
							<span className="text-center w-14 font-bold">
								{player.rank === 1 ? (
									<img src={firstPlace} alt='1st Place' className='mx-auto size-9' />
								) : player.rank === 2 ? (
									<img src={secondPlace} alt='2nd Place' className='mx-auto size-9' />
								) : player.rank === 3 ? (
									<img src={thirdPlace} alt='3rd Place' className='mx-auto size-8' />
								) : (
									player.rank
								)}
							</span>
							<span className="flex-1 pl-4">{player.name}</span>
							<span className="w-24 text-center">{player.matches}</span>
							<span className="w-24 text-center">{player.wins}</span>
						</div>
					))}
				</div>
			</div>

			<div className="mt-4 flex justify-center">
				<PulseButton view="score" handleClick={playAgain} />
			</div>
		</>
	)
}

export default Score;
