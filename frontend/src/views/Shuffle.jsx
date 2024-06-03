import { useNavigate } from "react-router-dom";

function Shuffle() {

	const navigate = useNavigate();

	return (
		<>
			<div>SHUFFLE</div>
			<button onClick={() => navigate('/fight')}>Click</button>
		</>
	)
}

export default Shuffle;
