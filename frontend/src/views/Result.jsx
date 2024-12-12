import {useLocation, useNavigate} from "react-router-dom";
import defeatImg from "../assets/defeat.png";
import pokefightarena from "../assets/fontpokefightarena.png";
import rival from "../assets/fontrivalblk.png";
import you from "../assets/fontyoublk.png";
import victoryImg from "../assets/victory.png";
import CardBack from "../components/CardBack.jsx";
import PulseButton from "../components/PulseButton";
import {UseContextStore} from "../utils/ContextProvider.jsx";

//import voicemod from "../assets/pokemon-voicemod.mp3";

function Result() {

	const {setGameWon} = UseContextStore();
	//console.log(openCard1);
	//console.log(openCard2);

	//const voiceMod = new Audio(voicemod);
	const navigate = useNavigate();
	const {state} = useLocation();
	console.log(state);

	const toScoreView = () => {

		if (state.hand2.length === 0) setGameWon(true);
		if (state.hand1.length === 0) setGameWon(false);

		navigate('/score');
		//voiceMod.volume = 0.5;
		//voiceMod.play();
	}

	return (
		<div className="relative bg-indigo-950 bg-boxring bg-cover bg-center w-screen h-screen">
			<div className="relative min-h-screen z-10">
				<div className="inner-container">
					<img src={pokefightarena} alt="Pokefight-Arena" className="w-full max-w-[500px] mb-12"/>
					<div className="grid grid-cols-2 gap-4 w-[70%] mx-auto">
						<div className="flex justify-center">
							<div className="mx-auto max-w-72 animate-pulse">
								{state.hand2.length === 0 ? <img src={victoryImg} alt="#"/> : <img src={defeatImg} alt="#"/>}
							</div>
						</div>
						<div className="flex justify-center">
							<div className="mx-auto max-w-72 animate-pulse">
								{state.hand1.length === 0 ? <img src={victoryImg} alt="#"/> : <img src={defeatImg} alt="#"/>}
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
