// Hier sind die settings für die Erstellung der Type Badges.
const getTypeColor = (type) => {
  switch (type) {
    case "Normal":
      return "bg-stone-400";
    case "Fire":
      return "bg-rose-500";
    case "Water":
      return "bg-sky-500";
    case "Electric":
      return "bg-amber-400";
    case "Grass":
      return "bg-lime-500";
    case "Ice":
      return "bg-sky-300";
    case "Fighting":
      return "bg-red-400";
    case "Poison":
      return "bg-fuchsia-700";
    case "Ground":
      return "bg-orange-300";
    case "Flying":
      return "bg-indigo-400";
    case "Psychic":
      return "bg-pink-400";
    case "Bug":
      return "bg-lime-400";
    case "Rock":
      return "bg-stone-400";
    case "Ghost":
      return "bg-violet-700";
    case "Dragon":
      return "bg-indigo-500";
    case "Dark":
      return "bg-stone-600";
    case "Steel":
      return "bg-grey-600";
    case "Fairy":
      return "bg-fuchsia-300";
    default:
      return "bg-base-100"; // default color wenn Type nicht erkannt wird.
  }
};

export default getTypeColor;
