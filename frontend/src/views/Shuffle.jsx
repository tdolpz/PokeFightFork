import {useNavigate} from "react-router-dom";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import CardBack from "../components/CardBack.jsx";
import PulseButton from "../components/PulseButton.jsx";
import questMark from "../assets/questmarkblk.png";
import cardStack from "../assets/pokecardstackblk.png";
import boxring from "../assets/boxring2.jpg";

function Shuffle() {
	const {playerName} = UseContextStore();
	const navigate = useNavigate();

	const navigateToFightView = () => {
		navigate('/fight');
	}

	return (
		<div className="relative bg-indigo-950">
			<img src={boxring} alt="#" className={"absolute top-0 left-0 h-full w-full object-cover z-0"}/>
			<div className="relative min-h-screen z-10">
				<div className="inner-container">

					<p>{playerName}</p>

					<div className="grid grid-cols-2">
						<div className="flex justify-center">
							<CardBack/>
						</div>
						<div className="flex justify-center">
							<CardBack/>
						</div>
					</div>

					<PulseButton view="shuffle" handleClick={navigateToFightView}/>

					<div className="grid grid-cols-2">
						<img className="mx-auto animate-bounce" src={questMark} alt="#"/>
						<img className="mx-auto animate-bounce" src={questMark} alt="#"/>
					</div>

					<img className="mx-auto w-full max-w-64" src={cardStack} alt="#"/>

				</div>
			</div>
		</div>
	);
}

export default Shuffle;
