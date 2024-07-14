import PropTypes from 'prop-types'

const CriptoHistory = ({ history }) => {
    return (
        <>
        <h2>Historial</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                {
                    history.map((his) => (
                        <tr key={his.time}>
                            <td>{his.date}</td>
                            <td>{parseFloat(his.priceUsd).toFixed(3)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

CriptoHistory.propTypes = {
    history: PropTypes.array
}

export default CriptoHistory