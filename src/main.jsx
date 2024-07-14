// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Criptos from './pages/CriptosPage.jsx'
import SingleCripto from './pages/CriptoPage.jsx'
import NotFountPage from './pages/NotFountPage.jsx'
import Home from './pages/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  <BrowserRouter>
			{/* <Menu/> */}
			<Routes>
				<Route path="/" element={<App/>}>
					<Route index element={<Home/>}/>
				</Route>
        <Route path='/criptomonedas' element={<App/>}>
          <Route index element={<Criptos/>}/>
          <Route path=":id" element={<SingleCripto/>}/>
        </Route>
        <Route path="*" element={<NotFountPage/>}/>
			</Routes>
		</BrowserRouter>
)
