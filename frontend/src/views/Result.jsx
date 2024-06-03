import { useContext } from "react";
import { StoreContext } from "../utils/context.js";
import {showView} from "../utils/views.js";

function Result() {
	const viewStates = useContext(StoreContext);

	return (
		<div>
			RESULT
			<p onClick={() => showView(viewStates, 'score')}>Click</p>
		</div>
	)
}

export default Result;
