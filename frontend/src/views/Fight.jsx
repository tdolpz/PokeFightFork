import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/context.js";

function Fight() {
	const navigate = useNavigate();
	const contextValue = useContext(Context);
	console.log(contextValue);

	return (
		<>
			<div>FIGHT</div>
			<button onClick={() => navigate('/result')}>Click</button>
		</>
	)
}

export default Fight;
