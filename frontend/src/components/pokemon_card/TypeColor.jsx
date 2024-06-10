// Hier sind die settings für die Erstellung der Type Badges.
const getTypeColor = (type) => {
  switch (type) {
    case "Normal":
      return " text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-stone-400 dark:text-white";
    case "Fire":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-rose-500 dark:text-white";
    case "Water":
      return " text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-sky-500 dark:text-white";
    case "Electric":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-amber-400 dark:text-white";
    case "Grass":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-lime-500 dark:text-white";
    case "Ice":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-sky-300 dark:text-white";
    case "Fighting":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-400 dark:text-white";
    case "Poison":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-fuchsia-700 dark:text-white";
    case "Ground":
      return " text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-300 dark:text-white";
    case "Flying":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-400 dark:text-white";
    case "Psychic":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-400 dark:text-white";
    case "Bug":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-lime-400 dark:text-white";
    case "Rock":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-stone-400 dark:text-white";
    case "Ghost":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-violet-700 dark:text-white";
    case "Dragon":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 dark:text-white";
    case "Dark":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-stone-600 dark:text-white";
    case "Steel":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-grey-600 dark:text-white";
    case "Fairy":
      return "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-fuchsia-300 dark:text-white";
    default:
      return "bg-base-100"; // default color wenn Type nicht erkannt wird.
  }
};

export default getTypeColor;
