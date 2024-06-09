import { Outlet } from "react-router-dom";
import fontpokefightarena from "../assets/fontpokefightarena.png";
import boxring from "../assets/boxring.png";

function Arena() {

  // render component
  return (
			<div className="relative min-h-screen min-w-screen">
				<img src={boxring} alt="#" className="absolute top-0 left-0 h-full w-full object-cover z-0" />
				<div className="w-screen h-screen p-8 lg:p-16 relative z-10">
					<div className="max-w-[960px] lg:max-w-[75%] mx-auto flex flex-col h-full items-center justify-center">
						<div className={"max-w-[500px] mb-8"}>
							<img src={fontpokefightarena} alt="Pokefight-Arena" />
						</div>
						<Outlet />
					</div>
				</div>
			</div>
  );
}

export default Arena;
