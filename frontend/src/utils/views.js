export const showView = (viewStates, view) => {
	switch (view) {
		case 'shuffle' :
			viewStates[0][1](true);
			viewStates[1][1](false);
			viewStates[2][1](false);
			viewStates[3][1](false);
			break;

		case 'fight' :
			viewStates[0][1](false);
			viewStates[1][1](true);
			viewStates[2][1](false);
			viewStates[3][1](false);
			break;

		case 'result' :
			viewStates[0][1](false);
			viewStates[1][1](false);
			viewStates[2][1](true);
			viewStates[3][1](false);
			break;

		case 'score' :
			viewStates[0][1](false);
			viewStates[1][1](false);
			viewStates[2][1](false);
			viewStates[3][1](true);
			break;
	}
}
