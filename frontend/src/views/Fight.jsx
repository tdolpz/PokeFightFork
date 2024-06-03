import { useContext } from "react";
import { StoreContext } from "../utils/context.js";
import {showView} from "../utils/views.js";

function Fight() {
	const viewStates = useContext(StoreContext);

	return (
		<div>
			FIGHT
			<p onClick={() => showView(viewStates, 'result')}>Click</p>
		</div>
	)
}

export default Fight;
