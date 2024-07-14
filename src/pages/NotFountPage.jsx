import { Link } from "react-router-dom"

const NotFountPage = () => {
    return (
        <>
            <h1 className="text-white">Página no encontrada</h1>
            <Link to='/' className="text-white bg-slate-950 rounded-lg py-2 px-4 inline-block">Go to home</Link>
        </>
    )
}

export default NotFountPage