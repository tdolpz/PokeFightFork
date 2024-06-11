import CardBack from "./CardBack.jsx";

function HandStack({ hand }) {

	const handStack = hand.length - 1;
	const handPos = [43, 49, 55, 61];

	let arr= [];
	for (let i= 0; i < handStack;i++) {
		arr.push(i);
	}

	console.log(arr);

	return (
		<>
			{(hand.length !== 0) &&

				<div className="relative h-56 w-full">
					{arr.map((item, index) => {
						let leftPos = `${handPos[index]}%`;
						let translatePos = `-${handPos[index]}% 0`;
						return (
							<div className="absolute top-0 -translate-x-[${handPos[index]}%]`}" key={index} style={{left: leftPos, translate: translatePos}}>
								<CardBack/>
							</div>
						);
						}
					)}
				</div>
			}
		</>
	)
}

export default HandStack;


