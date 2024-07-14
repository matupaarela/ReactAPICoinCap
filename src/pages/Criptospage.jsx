import { useEffect, useState } from "react"
import axios from 'axios'
import Cripto from "../components/Cripto"

const Criptos = ()  => {

	const [criptos, setCriptos] = useState()
	
	useEffect(() => {
		const API_URL = import.meta.env.VITE_API_URL
		axios.get(`${API_URL}assets`)
			.then((data) => {
				setCriptos(data.data.data)
				// console.log(data)
			})
			.catch(() => {
				console.log('Error en la petición')
			})
	}, [])

	if (!criptos) return (
		<span>Cargando</span>
	)

	return (
		<>
			<h1 className="text-2xl font-bold mb-4 text-white">Lista de criptomonedas</h1>

			<section className="grid grid-cols-1 grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
				{
					criptos.map((cripto) => (
						<Cripto key={cripto.id} cripto={cripto} />
					))
				}
			</section>
		</>
	)
}

export default Criptos
