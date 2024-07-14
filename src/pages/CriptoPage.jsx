import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const SingleCripto = () => {

    const params = useParams()
    const [cripto, setCripto] = useState()
    
    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL
        axios.get(`${API_URL}assets/${params.id}`)
            .then((data) => {
                setCripto(data.data.data)
                // console.log(data.data.data)
            })
            .catch(() => {
                console.log("Error, no se pudo obtener la criptomoneda")
            })
    }, [])

    if (!cripto) return <p>Cargando</p>

    const price = parseFloat(cripto.priceUsd).toFixed(2)
    const change = parseFloat(cripto.changePercent24Hr).toFixed(3)
    const changeClass = cripto.changePercent24Hr > 0 ? 'text-green-500' : 'text-red-400'
    
    return (
        <article className="text-white">
            <h1 className="text-white font-bold text-xl mb-4">Criptomoneda: {cripto.name}</h1>
            <div>
                <p className='text-sm'>Precio: {price}</p>
                <p>Variación 24H: <span className={`${changeClass}`}>{change}%</span></p>
            </div>
        </article>
    )
}

export default SingleCripto