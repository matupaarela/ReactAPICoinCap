import { Outlet } from 'react-router-dom'
import Menu from './components/menu/Menu'

function App() {

	return (
		<>
			<Menu/>
			<Outlet/>
		</>
	)
}

export default App
