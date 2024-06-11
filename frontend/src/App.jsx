import { Route, Routes } from "react-router-dom";
import Start from "./views/Start.jsx";
import Arena from "./views/Arena.jsx";
import Shuffle from "./views/Shuffle.jsx";
import Fight from "./views/Fight.jsx";
import Result from "./views/Result.jsx";
import Score from "./views/Score.jsx";

function App() {
  return (
		<div>
			<Routes>
				<Route path='/' element={<Start />}/>
			</Routes>
		</div>
  )
}

export default App
