import { useContext } from "react";
import { StoreContext } from "../utils/context.js";
import {showView} from "../utils/views.js";

function Shuffle() {

	const viewStates = useContext(StoreContext);

	return (
		<div>
			SHUFFLE
			<p onClick={() => showView(viewStates, 'fight')}>Click</p>
		</div>
	)
}

export default Shuffle;
