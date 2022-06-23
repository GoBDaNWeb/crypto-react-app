import Header from './components/Header'
import Main from './pages/Main'
import Coin from './pages/Coin'
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="bg-gray-700 min-h-screen">
			<Header/>
			<div>
				<Routes>
					<Route path='/' element={<Main/>}/>
 					<Route path='/coin/:id' element={<Coin/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
