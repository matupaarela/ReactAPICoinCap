import PropTypes from 'prop-types'
import { parseFloatNumber } from '../../helpers/util'

const CriptoInfo = ({ cripto }) => {
    
    const price = parseFloatNumber(cripto.priceUsd, 2)
    const change = parseFloatNumber(cripto.changePercent24Hr, 3)
    const changeClass = cripto.changePercent24Hr > 0 ? 'text-green-500' : 'text-red-400'

    return (
        <>
            <h1 className="text-white font-bold text-xl mb-4">Criptomoneda: {cripto.name}</h1>
            <div>
                <p className='text-sm'>Precio: {price}</p>
                <p>Variación 24H: <span className={`${changeClass}`}>{change}%</span></p>
            </div>
        </>
    )
}

CriptoInfo.propTypes =  {
    cripto: PropTypes.object
}

export default CriptoInfo