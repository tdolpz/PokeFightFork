import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/context.js";
import CardBack from "../components/CardBack.jsx";
import PulseButton from "../components/PulseButton.jsx";
import questMark from "../assets/questmarkblk.png";
import cardStack from "../assets/pokecardstackblk.png";

function Shuffle() {
  const navigate = useNavigate();
  const contextValue = useContext(Context);
  console.log(contextValue);

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex justify-center bg-black/50">
          <CardBack />
        </div>
        <div className="flex justify-center bg-black/50">
          <CardBack />
        </div>
      </div>
      <PulseButton view="fight" />
      <div className="grid grid-cols-3 gap-8">
        <div>
          <img className="mx-auto pl-[10vw]" src={questMark} />
        </div>
        <div>
          <img className="mx-auto w-full max-w-64" src={cardStack} />
        </div>
        <div>
          <img className="mx-auto pr-[10vw]" src={questMark} />
        </div>
      </div>
    </div>
    // <>
    // 	<div>Shuffle</div>
    // 	<button onClick={() => navigate('/fight')}>Click</button>
    // </>
  );
}

export default Shuffle;
