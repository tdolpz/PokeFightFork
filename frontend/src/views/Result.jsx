import {useNavigate, useLocation} from "react-router-dom";

function Result() {

	const { state } = useLocation();
	const hand1 = state.hand1;
	const hand2 = state.hand2;

	console.log(hand1);
	console.log(hand2);

	let victory, defeat;

	if (hand1.length === 0) {
		victory = 2;
		defeat = 1;
	}

	if (hand2.length === 0) {
		victory = 1;
		defeat = 2;
	}

	console.log('victory: ', victory, 'defeat: ', defeat);

	const navigate = useNavigate();

	return (
		<>
			<div>RESULT</div>

			<div className="w-full grid grid-cols-2">

				<div className="">
					<div>{victory === 1 ? 'VICTORY' : 'DEFEAT'}</div>
					<div>PLAYER 1 (YOU)</div>
				</div>

				<div className="">
					<div>{victory === 2 ? 'VICTORY' : 'DEFEAT'}</div>
					<div>PLAYER 2 (COMPUTER)</div>
				</div>

			</div>

			<button onClick={() => navigate('/score')}>Click</button>
		</>
	)
}

export default Result;
