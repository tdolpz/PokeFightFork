import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/context.js";

function Shuffle() {
	const navigate = useNavigate();
	const contextValue = useContext(Context);
	console.log(contextValue);
	return (
	<>
		<div>Shuffle</div>
		<button onClick={() => navigate('/fight')}>Click</button>
	</>
	)
}

export default Shuffle;
