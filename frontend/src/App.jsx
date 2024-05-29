import { Route, Routes } from "react-router-dom";
import PokemonList from "./views/PokemonList.jsx";
import PokemonInfo from "./views/PokemonInfo.jsx";
import PokemonDetailInfo from "./views/PokemonDetailInfo.jsx";

function App() {
  return (
		<div>
			<Routes>
				<Route path='/' element={<PokemonList />} />
				<Route path='/pokemon/' element={<PokemonList />} />
				<Route path='/pokemon/:pokemonId' element={<PokemonInfo />} />
				<Route path='/pokemon/:pokemonId/:pokemonInfo' element={<PokemonDetailInfo />} />
			</Routes>
		</div>
  )
}

export default App
