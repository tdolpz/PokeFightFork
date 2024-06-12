import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import PokemonCard from "../components/PokemonCard.jsx";
import PulseButton from "../components/PulseButton.jsx";
import HandStack from "../components/HandStack.jsx";
import {getRandomCards} from "../utils/randomCards.js";
import boxring from "../assets/boxring2.jpg";
import pokefightarena from "../assets/fontpokefightarena.png";
import versus from '../assets/versus.png';
import you from "../assets/fontyoublk.png";
import rival from "../assets/fontrivalblk.png";
import punchSound from "../assets/punch.mp3";
import boxingbell from "../assets/boxingbell.mp3";

const getAttacker = () => {
	return Math.floor(Math.random() * 2) + 1; // random 1 or 2
}

const getAttackMethod = () => {
	return (Math.random() < 0.5) ? 'attack' : 'spattack'; // random true or false
}

function Fight() {

	const {pokemonData} = UseContextStore();
	const randomCards = getRandomCards(8, 1, 200);
	const navigate = useNavigate();

	const [attackPlayer, setAttackPlayer] = useState(getAttacker); // 1 or 2
	const [attackMethod, setAttackMethod] = useState(getAttackMethod); // attack or spattack
	const [hand1, setHand1] = useState(randomCards.player1);
	const [hand2, setHand2] = useState(randomCards.player2);

	const [life1, setLife1] = useState(100);
	const [life2, setLife2] = useState(100);
	const [newRound, setNewRound] = useState(false);
	const [fightWinner, setFightWinner] = useState(null);

	const punch = new Audio(punchSound);
	const bell = new Audio(boxingbell);

	console.log('-->', hand1);
	console.log('-->', hand2);

	// get fight params
	const getFightParams = (pokemonId) => {
		const params = pokemonData.filter(entry => entry.id === pokemonId)[0].base;
		let fightParams = {};
		for (let [key, value] of Object.entries(params)) {
			key = key.replace(/.\s/g, "").toLowerCase(); // remove dot and white spaces in key names
			fightParams[key] = value;
		}
		return (pokemonId) ? fightParams : false;
	}

	// trigger new round
	const isNewRound = (newrnd) => {
		setNewRound(newrnd);
		bell.play();
	}

	// init new round
	const startNewRound = () => {
		if (fightWinner === 1) setHand2(hand2.slice(1));
		if (fightWinner === 2) setHand1(hand1.slice(1));
		if (fightWinner === 0) {
			setHand2(hand2.slice(1));
			setHand1(hand1.slice(1));
		}
		setLife1(100);
		setLife2(100);
		setNewRound(false);
	}

	// manage fight click
	const handleFightClick = (e) => {
		e.preventDefault();
		setAttackPlayer(getAttacker); 		// define who is attack player
		setAttackMethod(getAttackMethod); // define which attack method to be used
		getFightResult();
		punch.play();
	};


	// determine fight result
	const getFightResult = () => {

		const fightParams1 = getFightParams(hand1[0]);
		const fightParams2 = getFightParams(hand2[0]);
		const defenseMethod = (attackMethod === 'attack') ? 'defense' : 'spdefense';

		// Player 1 is Attacker
		if (attackPlayer === 1) {

			let newLife1, newLife2;
			let diff = fightParams1[attackMethod] - fightParams2[defenseMethod];

			/*
			console.log('###############');
			console.log('attacker: ', 'player 1');
			console.log('attack method: ', attackMethod);
			console.log('attack value: ', fightParams1[attackMethod]);

			console.log('defender: ', 'player 2');
			console.log('defense method defender: ', defenseMethod);
			console.log('defense value defender: ', fightParams2[defenseMethod]);

			console.log('difference: ', diff);
			console.log('differencePercentage: ', Math.round(diff * 100 / fightParams2.hp));
			*/

			// Player 1 has won -> update card of player 2
			if (diff > 0) {
				setFightWinner(1);
				newLife2 = life2 - Math.round(diff * 100 / fightParams2.hp);
				//console.log('newLife2: ', newLife2);
				setLife2(newLife2);
			}

			// Player 2 has won -> update card of player 1
			else if (diff < 0) {
				setFightWinner(2);
				newLife1 = life1 + Math.round(diff * 100 / fightParams1.hp);
				//console.log('newLife1: ', newLife1);
				setLife1(newLife1);
			}

			// Draw
			else {
				setFightWinner(0);
				//console.log('DRAW');
			}
		}

		// Player 2 is Attacker
		if (attackPlayer === 2) {
			let newLife1, newLife2;
			let diff = fightParams2[attackMethod] - fightParams1[defenseMethod];

			/*
			console.log('###############');
			console.log('attacker: ', 'player 2');
			console.log('attack method: ', attackMethod);
			console.log('attack value: ', fightParams2[attackMethod]);

			console.log('defender: ', 'player 1');
			console.log('defense method defender: ', defenseMethod);
			console.log('defense value defender: ', fightParams1[defenseMethod]);

			console.log('difference: ', diff);
			console.log('differencePercentage: ', Math.round(diff * 100 / fightParams1.hp));
			*/

			// Player 2 has won -> update card of player 1
			if (diff > 0) {
				setFightWinner(2);
				newLife1 = life1 - Math.round(diff * 100 / fightParams1.hp);
				//console.log('newLife1: ', newLife1);
				setLife1(newLife1);
			}

			// Player 1 has won -> update card of player 2
			else if (diff < 0) {
				setFightWinner(1);
				newLife2 = life2 + Math.round(diff * 100 / fightParams2.hp);
				//console.log('newLife2: ', newLife2);
				setLife2(newLife2);
			}

			// Draw
			else {
				setFightWinner(0);
				//console.log('DRAW');
			}
		}
	}


	if (hand1.length === 0 || hand2.length === 0) {
		navigate('/arena/result', {state: {hand1: hand1, hand2: hand2}});
		return;
	}

	return (

		<div className="relative bg-indigo-950">
			<img src={boxring} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">

					<img src={pokefightarena} alt="Pokefight-Arena" className="w-full max-w-[500px] mb-12"/>

					<div className="grid grid-cols-2 justify-items-center relative z-10 w-full">
						<img src={you} alt="#" className="h-16 mb-4"/>
						<img src={rival} alt="#" className="h-16 mb-4"/>
					</div>


					<div className="relative w-full">

						<div className="absolute top-0 left-0 z-0 size-full flex items-center justify-center">
							<img src={versus} alt="#" className="max-w-40"/>
						</div>

						<div className="grid grid-cols-2 justify-items-center relative z-10 w-full">
							<div className="flex justify-center flex-col items-center">
								<PokemonCard
									id={hand1[0]}
									life={life1}
									isAttacker={attackPlayer === 1}
									attackMethod={attackMethod}
									isNewRound={isNewRound}
								/>
							</div>
							<div className="flex justify-center flex-col items-center">
								<PokemonCard
									id={hand2[0]}
									life={life2}
									isAttacker={attackPlayer === 2}
									attackMethod={attackMethod}
									isNewRound={isNewRound}
								/>
							</div>
						</div>

					</div>

					{newRound && <PulseButton view="fight" handleClick={startNewRound} newRound={newRound}/>}
					{!newRound && <PulseButton view="fight" handleClick={handleFightClick}/>}

					<div className="grid grid-cols-2 justify-items-center">
						<HandStack hand={hand1}/>
						<HandStack hand={hand2}/>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Fight;





