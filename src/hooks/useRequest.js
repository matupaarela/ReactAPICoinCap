import { useEffect, useState } from "react"
import axios from 'axios'

const useRequest = (endpoint) => {
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL
        setLoading(true)
        axios.get(`${API_URL}${endpoint}`)
            .then(data => {
                setResponse(data.data.data)
                setLoading(false)
                // console.log(data.data.data)
            })
            .catch(e => {
                setLoading(false)
                console.log(e)
            })
    }, [])

    return [response, loading]
}

export default useRequest