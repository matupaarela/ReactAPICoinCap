import Cripto from "../components/Cripto"
import useRequest from "../hooks/useRequest"

const Criptos = ()  => {

	const [criptos, loading] = useRequest('assets')

	if (!criptos || loading) return (
		<span className="text-white">Cargando</span>
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
