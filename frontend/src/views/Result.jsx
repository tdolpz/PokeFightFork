import {useLocation, useNavigate} from "react-router-dom";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import PulseButton from "../components/PulseButton";
import CardBack from "../components/CardBack.jsx";
import defeatImg from "../assets/defeat.png";
import victoryImg from "../assets/victory.png";
import you from "../assets/fontyoublk.png";
import rival from "../assets/fontrivalblk.png";
import boxring from "../assets/boxring2.jpg";
import pokefightarena from "../assets/fontpokefightarena.png";

//import voicemod from "../assets/pokemon-voicemod.mp3";

function Result() {

	const {openCard1, openCard2} = UseContextStore();
	console.log(openCard1);
	console.log(openCard2);

	//const voiceMod = new Audio(voicemod);
	const navigate = useNavigate();

	const {state} = useLocation();
	console.log(state);


	const toScoreView = () => {
		navigate('/score');
		//voiceMod.volume = 0.5;
		//voiceMod.play();
	}

	let victory;
	if (state.hand1.length === 0) victory = 2;
	if (state.hand2.length === 0) victory = 1;

	return (


		<div className="relative bg-indigo-950">
			<img src={boxring} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">

					<img src={pokefightarena} alt="Pokefight-Arena" className="w-full max-w-[500px] mb-12"/>

					<div className="grid grid-cols-2 gap-4 w-[70%] mx-auto">
						<div className="flex justify-center">
							<div className="mx-auto max-w-72 animate-pulse">
								{victory === 1 ? <img src={victoryImg} alt="#"/> : <img src={defeatImg} alt="#"/>}
							</div>
						</div>
						<div className="flex justify-center">
							<div className="mx-auto max-w-72 animate-pulse">
								{victory === 2 ? <img src={victoryImg} alt="#"/> : <img src={defeatImg} alt="#"/>}
							</div>
						</div>
						<div className="flex justify-center">
							<img src={you} alt="#" className="h-16 mb-4"/>
						</div>
						<div className="flex justify-center">
							<img src={rival} alt="#" className="h-16 mb-4"/>
						</div>
						<div className="flex justify-center">
							<CardBack/>
						</div>
						<div className="flex justify-center">
							<CardBack/>
						</div>
					</div>

					<div className="mt-4 flex justify-center">
						<PulseButton view="result" handleClick={toScoreView}/>
					</div>

				</div>
			</div>
		</div>

	)
}

export default Result;
