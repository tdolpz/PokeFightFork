import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import PulseButton from "../components/PulseButton.jsx";
import darkbrickentrance from "../assets/darkbrickentrance2.jpg";
import enterthearena from "../assets/enterthearena.png";
import fontlineinput from "../assets/fontlineinput.png";

function Start() {

	const {setPlayerName} = UseContextStore();
	const navigate = useNavigate();
	const inputElement = useRef();
	const [filledOut, setFilledOut] = useState(false);

	const enterArena = () => {
		if (filledOut) navigate('/shuffle');
		if (!filledOut) {
			alert('Please enter your name.');
			inputElement.current.focus();
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

	return (
		<div className="relative bg-indigo-950">
			<img src={darkbrickentrance} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">

					<img src={enterthearena} alt="#" className="mb-8"/>
					<form onSubmit={handleSubmit}>
						<label className="block text-center mb-4 text-amber-500/60 tracking-widest" htmlFor="myInput">INSERT YOUR
							NAME</label>
						<input
							id="myInput"
							name="myInput"
							className="start-input w-[500px]"
							autoFocus="autofocus"
							ref={inputElement}
							onChange={handleChange}
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
