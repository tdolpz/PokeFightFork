export const getRandomCards = (qty, min, max) => {

	let randomNumber;
	let array=[];

	do {
		randomNumber = Math.floor(Math.random() * max) + min;
		if (!array.includes(randomNumber)) {
			array.push(randomNumber);
		}
	}
	while(array.length < qty);

	return {
		arr: array,
		player1: array.filter((a,i) => i%2===0),
		player2: array.filter((a,i) => i%2===1)
	}

}
