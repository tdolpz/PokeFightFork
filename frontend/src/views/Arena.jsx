import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import axios from "axios";

const fetchData = async () => {
	const {data} = await axios.get(`http://localhost:8000/pokemon/`);
	return data;
};

function Arena() {

	// Call useQuery to fetch pokemon data
	const {data, isLoading, isError} = useQuery({
		queryKey: ["pokemonData"],
		queryFn: fetchData,
	});

	const {setPokemonData} = UseContextStore();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!isLoading) {
			setPokemonData(data);
		}
		setTimeout(() => {
			setLoading(false);
			navigate("/start");
		}, 600);
	}, [data]);

	return (
		<>
			{loading ? (
				<div className="w-screen h-screen flex justify-center items-center bg-[#101721]">LOADING ...</div>
			) : (
				<>
					{/*<div className="absolute top-8 right-8 z-20 bg-fuchsia-500">AUDIO CONTROLS</div>*/}
					<Outlet/>
				</>
			)
			}
		</>
	);
}

export default Arena;
