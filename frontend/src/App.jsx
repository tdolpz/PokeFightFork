import {Route, Routes} from "react-router-dom";
import Arena from "./views/Arena.jsx";
import Fight from "./views/Fight.jsx";
import Result from "./views/Result.jsx";
import Score from "./views/Score.jsx";
import Shuffle from "./views/Shuffle.jsx";
import Start from "./views/Start.jsx";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Arena/>}>
				<Route path='/start' element={<Start/>}/>
				<Route path='/shuffle' element={<Shuffle/>}/>
				<Route path='/fight' element={<Fight/>}/>
				<Route path='/result' element={<Result/>}/>
				<Route path='/score' element={<Score/>}/>
			</Route>
		</Routes>
	);
}

export default App;
