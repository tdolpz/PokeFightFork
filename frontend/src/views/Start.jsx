import {useNavigate} from "react-router-dom";
import PulseButton from "../components/PulseButton.jsx";
import darkbrickentrance from "../assets/darkbrickentrance2.jpg";
import enterthearena from "../assets/enterthearena.png";
import fontlineinput from "../assets/fontlineinput.png";
import pokegym from "../assets/pokemon-gym.mp3";

function Start() {

	const pokemonGym = new Audio(pokegym);
	const navigate = useNavigate();

	const enterArena = () => {
		navigate('/arena');
		// pokemonGym.sound = 0.1;
		// pokemonGym.play();
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
					<form className="">
						<label className="block text-center mb-4 text-amber-500/60 tracking-widest">INSERT YOUR
							NAME</label>
						<input
							name="myInput"
							className="start-input w-[500px]"
							autoFocus="autofocus"
						/>
					</form>
					<img src={fontlineinput} alt="#" className="mb-8"/>

					<PulseButton view="start" handleClick={enterArena}/>

				</div>
			</div>
		</div>
	)
}

export default Start;
