import cardBackImg from "../assets/pokecardbackground.jpg";

function CardBack() {

  return (
    <div className="rounded-xl overflow-hidden size-full max-w-40 shadow-[0_0_2px_#00000033,inset_0_0_2px_#00000033,0_0_2px_#00000033,0_0_5px_#00000033,0_0_5px_#00000033] rotate-180">
      <img src={cardBackImg} alt="image cardback" />
    </div>
  );
}

export default CardBack;
