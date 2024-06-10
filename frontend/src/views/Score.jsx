import { useNavigate } from "react-router-dom";
function Score() {

	const navigate = useNavigate();

	return (
		<div>

			<button onClick={() => navigate('/')}>New game</button>

		</div>
	)
}

export default Score;
