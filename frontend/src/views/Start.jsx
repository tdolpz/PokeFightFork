import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import darkbrickentrance from "../assets/darkbrickentrance2.jpg";
import enterthearena from "../assets/enterthearena.png";
import fontlineinput from "../assets/fontlineinput.png";
import loudspeaker from "../assets/loudspeaker.png";
import pokegym from "../assets/pokemon-gym.mp3";
import PulseButton from "../components/PulseButton.jsx";
import {UseContextStore} from "../utils/ContextProvider.jsx";

function Start() {

	const {playerData, setPlayerName, playerName, setCurrentPlayerId} = UseContextStore();
	const pokemonGym = new Audio(pokegym);
	const navigate = useNavigate();
	const inputElement = useRef();
	const [filledOut, setFilledOut] = useState(false);


	console.log(playerData);


	const checkPlayerName = () => {
		return playerData.filter(item => item.name === playerName);
	}

	const enterArena = () => {
		if (filledOut) {
			let playerExists = checkPlayerName();

			if (playerExists.length === 0) {
				//navigate('/score');
				alert('Please enter your name.');
			} else {
				alert('This Player already exists. Do you want to play as "' + playerName + '"?');
				//console.log(playerExists[0]._id);
				setCurrentPlayerId(playerExists[0]._id);
				navigate('/shuffle');
			}
		}

		if (!filledOut) {
			alert('Please enter your name.');
			//inputElement.current.focus();
		}
	}

	const handleChange = (e) => {
		e.preventDefault();
		setPlayerName(e.target.value);
		setFilledOut(true);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		enterArena();
	}

	const playSound = () => {
		if (pokemonGym.paused) {
			pokemonGym.play();
		} else {
			pokemonGym.pause();
		}
	}

	return (
		<div className="relative bg-indigo-950">
			<img src={darkbrickentrance} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">

					<img src={enterthearena} alt="#" className="mb-8"/>
					<form onSubmit={handleSubmit}>
						<label className="block text-center text-amber-500/60 tracking-widest text-xl" htmlFor="myInput">INSERT
							YOUR
							NAME</label>
						<input
							id="myInput"
							name="myInput"
							className="start-input w-[500px] font-pokemon text-pokemon text-3xl pokefont-outline tracking-[3px] h-16"
							autoFocus="autofocus"
							ref={inputElement}
							onChange={handleChange}
						/>
					</form>
					<img src={fontlineinput} alt="#" className="mb-8"/>

					<button onClick={playSound} className="opacity-60 my-6">
						<img className="max-w-8 mr-4" src={loudspeaker}/>
					</button>

					<PulseButton view="start" handleClick={enterArena}/>

				</div>
			</div>
		</div>
	)
}

export default Start;
