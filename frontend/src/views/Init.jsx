import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";

function Init() {

	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/start");
		}, 10);
	}, []);


	return (
		<Outlet/>
	)
}

export default Init;
