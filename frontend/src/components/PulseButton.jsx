import shuffleBtn from "../assets/fontshuffledealblk.png";
import fightBtn from "../assets/fontfightblk2.png";

function PulseButton({ view }) {
  console.log(view);
  let btn;
  if (view === "shuffle") btn = shuffleBtn;
  if (view === "fight") btn = fightBtn;

  return (
    <button className="my-8 max-w-56 mx-auto animate-ping bg-sky-400 opacity-75 delay-1000">
      <img src={btn} />
    </button>
  );
}

export default PulseButton;
