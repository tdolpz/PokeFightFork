import {useNavigate} from "react-router-dom";

function Result() {

	const navigate = useNavigate();

	return (
		<>
			<div>RESULT</div>
			<button onClick={() => navigate('/score')}>Click</button>
		</>
	)
}

export default Result;
