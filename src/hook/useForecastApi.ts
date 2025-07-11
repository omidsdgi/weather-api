import {useEffect, useState} from "react";
import {callForecastApi, callWeatherApi} from "@/api/apiCall";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import ApiStatus from "@/types/api/ApiStatus";

interface ForecastProps{
    lat:number,
    lon:number,
}



export default function useForecastApi  ({lat,lon}:ForecastProps)  {
    const [response, setResponse] = useState<ForecastResponse|false>(false)

    const [status, setStatus] = useState<ApiStatus>("pending")
    const apiCall=async ()=>{
        setStatus('isLoading')

        const result:ForecastResponse|false =  await callForecastApi({lat,lon})

        if (result ===false){
            setStatus('hasError')
            return
        }
        setStatus("isSuccess")
        setResponse(result)
    }
    useEffect(() => {
        if(lat !==0 && lon !==0)
        apiCall()
    }, [lat,lon]);

    return {status,response}
}