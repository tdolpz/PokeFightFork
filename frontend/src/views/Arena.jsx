import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';
import fontpokefightarena from "../assets/fontpokefightarena.png";

const fetchData = async () => {
	const { data } = await axios.get(`http://localhost:8000/pokemon/`);
	return data;
};

function Arena() {

	const { data, isLoading, isError} = useQuery({
		queryKey: ['myData'],
		queryFn: fetchData
	})

	// init navigate function
	const navigate = useNavigate();

	// get and set 'loading' state
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(()=> {
			setLoading(false);
			navigate('/shuffle');
		}, 1000);
	}, []);


	// loading spinner
	const loadingSpinner = (
		<div>LOADING ...</div>
	);

	// scene content
	const scene = (
		<>
			<div className={"max-w-[500px]"}>
				<img src={fontpokefightarena} alt="Pokefight-Arena"/>
			</div>
			<Outlet />
		</>
	);

	// render component
	return (
		<div className="arena">
			<div className={isLoading ? 'arena-inner justify-center' : 'arena-inner'}>
				{loading ? loadingSpinner : scene}
			</div>
		</div>
	)
}

export default Arena;
