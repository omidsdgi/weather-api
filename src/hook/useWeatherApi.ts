import {WeatherResponse} from "@/types/api/WeatherResponse";
import {callWeatherApi} from "@/api/api";
import {useEffect, useState} from "react";
import ApiStatus from "@/types/api/ApiStatus";

interface Props {
    city: string;
}
interface WeatherResult {
    response:WeatherResponse|false
}

export default  function   useWeatherApi({city}:Props) {

    const [response, setResponse] = useState<WeatherResponse|false>(false)

    const [status, setStatus] = useState<ApiStatus>("pending")
    const apiCall=async ()=>{
        setStatus('isLoading')

        const result:WeatherResponse|false =  await callWeatherApi({city})

        if (result ===false){
            setStatus('hasError')
            return
        }
        setStatus("isSuccess")
        setResponse(result)
    }
    useEffect(() => {
        apiCall()
    }, [city]);

    return {status,response}
}
