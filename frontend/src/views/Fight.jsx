import { useNavigate } from "react-router-dom";

function Fight() {

	const navigate = useNavigate();

	return (
		<>
			<div>FIGHT</div>
			<button onClick={() => navigate('/result')}>Click</button>
		</>
	)
}

export default Fight;
