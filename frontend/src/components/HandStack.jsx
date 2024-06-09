import {useEffect, useState} from 'react';
import CardBack from "./CardBack.jsx";

function HandStack({ hand }) {

	const [handStack, setHandstack] = useState(hand.slice(1));

	useEffect(() => {
		setHandstack(handStack);
	}, []);


	console.log(handStack);


	const handPos = [43, 49, 55, 61];


	return (
		<div className="relative h-56 w-full">
			{hand.map((item, index) => (
				<div className={`absolute left-[${handPos[index]}%] -translate-x-[${handPos[index]}%]`} key={index}>
					b
				</div>
			))}
		</div>
	)
}

export default HandStack;

/*
<CardBack/>


<>
	{(hand.length !== 0) &&

		<div className="relative h-56 w-full">
			{hand.map((item, index) => {
				if (index !== 0) {
					return (
						<div className={`absolute left-[${handPos[index]}%] -translate-x-[${handPos[index]}%]`} key={index}>
							<CardBack/></div>
					);
				}
			}


			)}
		</div>

	}
</>/*/
