import { Route, Routes } from "react-router-dom";
import Arena from "./views/Arena.jsx";
import Shuffle from "./views/Shuffle.jsx";
import Fight from "./views/Fight.jsx";
import Result from "./views/Result.jsx";
import Score from "./views/Score.jsx";

//import PokemonList from "./views/PokemonList.jsx";
//import PokemonInfo from "./views/PokemonInfo.jsx";
//import PokemonDetailInfo from "./views/PokemonDetailInfo.jsx";

function App() {
  return (
		<div>
			<Routes>

				<Route path='/' element={<Arena />}>
					<Route path='/shuffle' element={<Shuffle />} />
					<Route path='/fight' element={<Fight />} />
					<Route path='/result' element={<Result />} />
					<Route path='/score' element={<Score />} />
				</Route>

				{/*
				<Route path='/' element={<PokemonList />} />
				<Route path='/pokemon/' element={<PokemonList />} />
				<Route path='/pokemon/:pokemonId' element={<PokemonInfo />} />
				<Route path='/pokemon/:pokemonId/:pokemonInfo' element={<PokemonDetailInfo />} />
				*/}

			</Routes>
		</div>
  )
}

export default App
