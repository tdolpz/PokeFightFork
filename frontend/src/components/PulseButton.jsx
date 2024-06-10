import startBtn from "../assets/fontstart.png";
import shuffleBtn from "../assets/fontshuffledealblk.png";
import fightBtn from "../assets/fontfightblk2.png";
import resultBtn from "../assets/fontviewscore.png";
import newRoundBtn from "../assets/fontnewround.png";

function PulseButton({ view, handleClick, newRound= false }) {

	let btn;
	if (view === "start") btn = startBtn;
	if (view === "shuffle") btn = shuffleBtn;
	if (view === "fight") btn = fightBtn;
	if (view === "fight" && newRound === true) btn = newRoundBtn;
	if (view === "result") btn = resultBtn;

	return (
		<button className="my-4 mx-auto animate-pulse" onClick={handleClick}>
			<img src={btn} className="h-16 w-auto" alt="#"/>
		</button>
	);
}

export default PulseButton;
