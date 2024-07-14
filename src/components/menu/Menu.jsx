import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Menu = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        setUser({
            name: "Marco",
            registered: "13/12/2022"
        })
    }, [])

    return (
        <nav className="text-white mb-4 bg-slate-950 p-4">
            <ul className="flex items-center space-x-2">
                <li>
                    <NavLink className="hover:text-blue-500" to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-blue-500" to='/criptomonedas'>Criptos</NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-blue-500" to='/profile'>Perfil</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu