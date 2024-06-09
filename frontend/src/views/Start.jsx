import { useQuery } from "@tanstack/react-query";
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { getRandomCards } from "../utils/randomCards.js";
import { Context } from "../utils/context.js";
import darkbrickentrance from "../assets/darkbrickentrance2.jpg";
import enterthearena from "../assets/enterthearena.png";
import fontlineinput from "../assets/fontlineinput.png";
import fontstart from "../assets/fontstart.png";

const fetchData = async () => {
	const { data } = await axios.get(`http://localhost:8000/pokemon/`);
	return data;
};

// get random cards
const randomCards = getRandomCards(6, 1, 100);

function Start() {

	// Call useQuery to fetch pokemon data
	const { data, isLoading, isError } = useQuery({
		queryKey: ["pokemonData"],
		queryFn: fetchData,
	});

	// init navigate function
	const navigate = useNavigate();

	// enter the arena
	const enterArena = () => {
		navigate('/arena/shuffle');
	}

	// get and set 'loading' state
	const [loading, setLoading] = useState(true);

	// perform delay before redirecting to 'shuffle' view
	// navigate() calls the route and executes the redirect to the selected view
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	// render snippet for loading spinner
	const loadingSpinner = <div>LOADING ...</div>;

	const content = (
		<>
			<img src={enterthearena} alt="#" className="" />
			<form className="mt-12">
				<input type="text" placeholder="Enter Your Name" className="bg-transparent text-2xl placeholder:text-amber-500/50" autoFocus="autofocus" />
			</form>
			<img src={fontlineinput} alt="#" className="mb-8" />
			<button onClick={enterArena}>
				<img src={fontstart} alt="#" className="" />
			</button>
		</>
	);

	return (
		<Context.Provider value={{ data, isLoading, isError, randomCards }}>
			<div className="relative min-h-screen min-w-screen">
				<img src={darkbrickentrance} alt="#" className="absolute top-0 left-0 h-full w-full object-cover z-0" />
				<div className="w-screen h-screen p-8 lg:p-16 relative z-10">
					<div className="max-w-[960px] lg:max-w-[75%] mx-auto flex flex-col h-full items-center justify-center">
						{loading ? loadingSpinner : content}
					</div>
				</div>
			</div>
		</Context.Provider>
	)
}

export default Start;
