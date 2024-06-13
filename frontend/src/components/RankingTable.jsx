import firstPlace from "../assets/FirstPlace.png";
import secondPlace from "../assets/SecondPlace.png";
import thirdPlace from "../assets/ThirdPlace.png";

function RankingTable({players}) {

	return (
		<div className='overflow-y-auto h-80'>
			<div
				className="bg-orange-400 text-lg text-black font-bold underline decoration-double flex items-center rounded pt-1 pb-2 mb-2">
				<span className="w-14 text-center">Rank</span>
				<span className="text-left flex-1 pl-4">Player</span>
				<span className="text-center w-24">Matches</span>
				<span className="text-center w-24">Wins</span>
			</div>
			{players.map((player, index) => (
				<div className="bg-orange-200 text-lg text-black flex items-center h-10 rounded mb-2" key={index}>
							<span className="text-center w-14 font-bold">
								{player.rank === 1 ? (
									<img src={firstPlace} alt='1st Place' className='mx-auto size-9'/>
								) : player.rank === 2 ? (
									<img src={secondPlace} alt='2nd Place' className='mx-auto size-9'/>
								) : player.rank === 3 ? (
									<img src={thirdPlace} alt='3rd Place' className='mx-auto size-8'/>
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
	)
}

export default RankingTable;
