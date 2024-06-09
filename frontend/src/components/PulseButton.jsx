import shuffleBtn from "../assets/fontshuffledealblk.png";
import fightBtn from "../assets/fontfightblk2.png";

function PulseButton({ view, handleClick }) {

	let btn;
  if (view === "shuffle") btn = shuffleBtn;
  if (view === "fight") btn = fightBtn;

  return (
		<button className="my-8 max-w-56 mx-auto" onClick={handleClick}>
			<img src={btn} alt="#"/>
		</button>
  );
}

export default PulseButton;
