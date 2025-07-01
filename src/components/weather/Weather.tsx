import SearchForm from "@/components/weather/SearchForm";
import ForecastList from "@/components/weather/ForecastList";
import WeatherInfo from "@/components/weather/WeatherInfo";
import {useEffect, useState} from "react";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import Image from "next/image";
import ForecastItem from "@/components/weather/ForecastItem";
import ApiLoader from "@/components/share/ApiLoader/ApiLoader";
import useApiCall from "@/hook/useApiCall";
import {callForecastApi, callWeatherApi} from "@/api/Api";
import {ForecastProps, WeatherProps} from "@/types/api/FetcherProps";
interface Props {
    city: string;
}

function Weather({city}:Props) {

    const [cityState, setCityState] = useState(city)
    const [coord, setCoord] = useState({lat:0,lon:0})

    const {status,response}= useApiCall<WeatherResponse,WeatherProps>({func:callWeatherApi,params:{city:cityState},refresh:[cityState]})
    const {status:ForecastStatus,response:ForecastResponse}= useApiCall<ForecastResponse,ForecastProps>({
        func:callForecastApi,
        params:coord,
        refresh:[coord],
        enabled:(coord.lon !=0 && coord.lat !=0)
    })

    useEffect(() => {
        if(response){
            setCoord(response.coord)
        }
    }, [response]);

    let weather:null|Weather=null
    if(response){
        weather={
            city:response.name,
            wind:response.wind.speed,
            humidity:response.main.humidity,
            description:response.weather[0].description,
            icon:response.weather[0].icon,
            daily:[]
        }
    }

    return (
        <div className={"flex  flex-col items-center "}>
            <Image src={"logoNavax.svg"} alt={"Navax collage"} width={86} height={46}/>
            <div className={"bg-white shadow mt-4 rounded-2xl p-8 py-16 w-[750px] h-[500px]"}>
                <SearchForm city={cityState} setCityState={setCityState} />

                <ApiLoader status={status}>
                    {weather && <WeatherInfo weather={weather}/>}
                    <ApiLoader status={ForecastStatus}>
                        {ForecastResponse && <ForecastList forecast={ForecastResponse}/>}
                    </ApiLoader>
                </ApiLoader>


            </div>
        </div>
    );
}

export default Weather;