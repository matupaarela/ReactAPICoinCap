import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Cripto = ({ cripto }) => {

    const price = parseFloat(cripto.priceUsd).toFixed(2)
    const change = parseFloat(cripto.changePercent24Hr).toFixed(3)
    const changeClass = cripto.changePercent24Hr > 0 ? 'text-green-500' : 'text-red-400'

    return (
        <article className='border-2 rounded-md border-l-8 border-blue-200 p-2 text-white'>
            <header className='mb-2'>
                <Link className='font-bold' to={`/criptomonedas/${cripto.id}`}>{cripto.name} ({cripto.symbol})</Link>
            </header>
            <div>
                <p className='text-sm'>Precio: {price}</p>
                <p>Variación 24H: <span className={`${changeClass}`}>{change}%</span></p>
            </div>
        </article>
    )
}

Cripto.propTypes = {
    cripto: PropTypes.object
}

export default Cripto