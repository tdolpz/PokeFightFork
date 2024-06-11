import { useNavigate } from "react-router-dom";
import fontstart from "../assets/fontstart.png";
import darkbrickentrance from "../assets/darkbrickentrance2.jpg";
import enterthearena from "../assets/enterthearena.png";
import fontlineinput from "../assets/fontlineinput.png";

function Start() {

	const navigate = useNavigate();
	const enterArena = () => navigate('/arena');

	return (

		<div className="relative min-h-screen min-w-screen">
			<img src={darkbrickentrance} alt="#" className="absolute top-0 left-0 h-full w-full object-cover z-0" />
			<div className="w-screen h-screen p-8 lg:p-16 relative z-10">
				<div className="max-w-[960px] lg:max-w-[75%] mx-auto flex flex-col h-full items-center justify-center">

					<img src={enterthearena} alt="#" className="" />

					<div>
						<form className="mt-12">
								<input
									name="myInput"
									placeholder="INSERT NAME"
									className="bg-transparent mx-16 text-2xl  text-amber-500 placeholder:text-amber-500/70 text-center"
									autoFocus="autofocus"
								/>
						</form>
					</div>

					<img src={fontlineinput} alt="#" className="mb-8" />

					<button onClick={enterArena}>
						<img src={fontstart} alt="#" className="" />
					</button>

				</div>
			</div>
		</div>


	)
}

export default Start;
