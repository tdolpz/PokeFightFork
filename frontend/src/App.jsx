import {Route, Routes} from "react-router-dom";
import Start from "./views/Start.jsx";
import Shuffle from "./views/Shuffle.jsx";
import Fight from "./views/Fight.jsx";
import Result from "./views/Result.jsx";
import Score from "./views/Score.jsx";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Start/>}/>
			<Route path='/shuffle' element={<Shuffle/>}/>
			<Route path='/fight' element={<Fight/>}/>
			<Route path='/result' element={<Result/>}/>
			<Route path='/score' element={<Score/>}/>
		</Routes>
	);
}

export default App;
