import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <h1 className="text-white">Bienvenido al mundo de las criptos</h1>
            <p></p>
            <Link to='/criptomonedas'
                className="text-white inline-block py-2 px-4 bg-slate-950 rounded-md mt-4"
                >ver precios de criptos</Link>
        </>
    )
}

export default HomePage