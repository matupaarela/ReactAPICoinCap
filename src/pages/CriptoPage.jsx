import { useParams } from "react-router-dom"
import useRequest from "../hooks/useRequest"
import CriptoInfo from "../components/Cripto/CriptoInfo"
import CriptoHistory from "../components/Cripto/CriptoHistory"

const SingleCripto = () => {

    const params = useParams()

    const [cripto, loadingCripto] = useRequest(`assets/${params.id}`)
    const [history, loadingHistory] = useRequest(`assets/${params.id}/history?interval=d1`)
    
    if (loadingCripto || loadingHistory)
        return <span className="text-white">Cargando</span>

    return (
        <article className="text-white">
            {cripto && <CriptoInfo cripto={cripto}/>}
            {history && <CriptoHistory history={history}/>}
        </article>
    )
}

export default SingleCripto