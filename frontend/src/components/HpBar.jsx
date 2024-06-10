// Funktion für den Farbwechsel des Lebensbalkens.
const HpBar = ({ life }) => {

  let bgClass = "";

  if (life >= 75) {
    bgClass = "bg-green-500 h-5 rounded-full";
  } else if (life >= 50) {
    bgClass = "bg-yellow-500 h-5 rounded-full";
  } else if (life >= 25) {
    bgClass = "bg-orange-500 h-5 rounded-full";
  } else {
    bgClass = "bg-red-600 h-5 rounded-full";
  }

  return (
    // Settings Placeholderbalken
    <div className='w-4/5 bg-gray-200 rounded-full h-5 relative mt-4'>
      {" "}
      <div className={bgClass} style={{ width: `${life}%` }}></div>
			{/* Einstellung des HP Schriftzugs im Lebensbalken */}
			<span className='text-black text-xs font-semibold absolute top-0 left-0 w-full h-5 flex items-center justify-center'>
				{life}%
      </span>

    </div>
  );
};

export default HpBar;
