import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../utils/context.js";
import fontpokefightarena from "../assets/fontpokefightarena.png";
import { getRandomCards } from "../utils/randomCards.js";

const fetchData = async () => {
  const { data } = await axios.get(`http://localhost:8000/pokemon/`);
  return data;
};

// get random cards
const randomCards = getRandomCards(6, 1, 200);

function Arena() {
  // Call useQuery to fetch pokemon data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemonData"],
    queryFn: fetchData,
  });

  // init navigate function
  const navigate = useNavigate();

  // get and set 'loading' state
  const [loading, setLoading] = useState(true);

  // perform delay before redirecting to 'shuffle' view
  // navigate() calls the route and executes the redirect to the selected view
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/arena/shuffle");
    }, 500);
  }, []);

  // render snippet for loading spinner
  const loadingSpinner = <div>LOADING ...</div>;

  // render snippet for scene content
  // <Outlet /> displays different views depending on the selected nested route
  const scene = (
    <>
      <div className={"max-w-[500px] mb-8"}>
        <img src={fontpokefightarena} alt="Pokefight-Arena" />
      </div>
      <Outlet />
    </>
  );

  // render component
  return (
    <Context.Provider value={{ data, isLoading, isError, randomCards }}>
      <div className="arena">
        <div className={loading ? "arena-inner justify-center" : "arena-inner"}>
          {loading ? loadingSpinner : scene}
        </div>
      </div>
    </Context.Provider>
  );
}

export default Arena;
