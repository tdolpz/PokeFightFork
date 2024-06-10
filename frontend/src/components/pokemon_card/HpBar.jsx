import React from "react";
// Funktion für den Farbwechsel des Lebensbalkens.
const HpBar = ({ maxHp, hp }) => {
  let percentage = 100;
  let bgClass = "";

  if (percentage >= 75) {
    bgClass = "bg-green-500 h-4 rounded-full";
  } else if (percentage >= 50) {
    bgClass = "bg-yellow-500 h-4 rounded-full";
  } else if (percentage >= 25) {
    bgClass = "bg-orange-500 h-4 rounded-full";
  } else {
    bgClass = "bg-red-500 h-4 rounded-full";
  }

  return (
    // Settings Placeholderbalken
    <div className='w-4/5 bg-gray-200 rounded-full h-4 relative'>
      {" "}
      <div className={bgClass} style={{ width: `${percentage}%` }}>
        {/* Einstellung des HP Schriftzugs im Lebensbalken */}
        <span className='text-black text-center text-xs font-semibold absolute top-1/2 left-1/3 transform -translate-y-1/2'>
          HP: {hp} / {maxHp}
        </span>
      </div>
    </div>
  );
};

export default HpBar;
