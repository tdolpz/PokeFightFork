import {useNavigate, useLocation} from "react-router-dom";
import PulseButton from "../components/PulseButton";
import CardBack from "../components/CardBack";
import defeatImg from "../assets/defeat.png";
import victoryImg from "../assets/victory.png";
import you from "../assets/fontyoublk.png";
import rival from "../assets/fontrivalblk.png";
import fontpokefightarena from "../assets/fontpokefightarena.png";

function Result() {

	const navigate = useNavigate();
	const { state } = useLocation();
	const hand1 = state.hand1;
	const hand2 = state.hand2;

	console.log(hand1);
	console.log(hand2);

	const toScoreView = () => navigate('/arena/score');

	let victory;
	if (hand1.length === 0) victory = 2;
	if (hand2.length === 0) victory = 1;

	return (
		<>
			<div className={"max-w-[500px] mb-8"}>
				<img src={fontpokefightarena} alt="Pokefight-Arena" />
			</div>
			<div className="w-full h-full flex flex-col justify-center">
				<div className="grid grid-cols-2 gap-4 w-[70%] mx-auto">
					<div className="flex justify-center">
						<div className="mx-auto max-w-72 animate-pulse">
							{victory === 1 ? <img src={victoryImg} alt="#" /> : <img src={defeatImg} alt="#" />}
						</div>
					</div>
					<div className="flex justify-center">
						<div className="mx-auto max-w-72 animate-pulse">
							{victory === 2 ? <img src={victoryImg} alt="#" /> : <img src={defeatImg} alt="#" />}
						</div>
					</div>
					<div className="flex justify-center">
						<img src={you} alt="#" className="h-16 mb-4" />
					</div>
					<div className="flex justify-center">
						<img src={rival} alt="#" className="h-16 mb-4" />
					</div>
					<div className="flex justify-center">
						<CardBack />
					</div>
					<div className="flex justify-center">
						<CardBack />
					</div>
				</div>
				<div className="mt-4 flex justify-center">
					<PulseButton view="result" handleClick={toScoreView} />
				</div>
			</div>
		</>
	)
}

export default Result;
