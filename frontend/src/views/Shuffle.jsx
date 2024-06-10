import { useNavigate } from "react-router-dom";
import CardBack from "../components/CardBack.jsx";
import PulseButton from "../components/PulseButton.jsx";
import questMark from "../assets/questmarkblk.png";
import cardStack from "../assets/pokecardstackblk.png";


function Shuffle() {
  const navigate = useNavigate();

	const navigateToFightView = () => {
		navigate('/arena/fight');
	}

  return (

		<div className="w-full h-full flex flex-col justify-center">
			<div className="grid grid-cols-2">
				<div className="flex justify-center">
					<CardBack />
				</div>
				<div className="flex justify-center">
					<CardBack />
				</div>
			</div>

			<PulseButton view="shuffle" handleClick={navigateToFightView} />

			<div className="grid grid-cols-2">
				<img className="mx-auto animate-bounce" src={questMark} alt="#" />
				<img className="mx-auto animate-bounce" src={questMark} alt="#" />
			</div>

			<img className="mx-auto w-full max-w-64" src={cardStack} alt="#" />

		</div>
  );
}

export default Shuffle;
