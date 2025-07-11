import {SearchForm} from "@/components/weather/SearchForm";
import {WeatherInfo} from "@/components/weather/WeatherInfo";
import {ForecastList} from "@/components/weather/ForecastList";
import {useEffect, useState} from "react";
import Image from "next/image";
import ApiLoader from "@/components/share/ApiLoader/ApiLoader";
import useApiCall from "@/hook/useApiCall";
import {callForecastApi, callWeatherApi} from "@/api/api";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForecastProps, WeatherProps} from "@/types/api/FetcherProps";
import {ForecastResponse} from "@/types/api/ForecastResponse";

interface Props {
    city: string;
}

export function Weather({city}: Props) {

    const [cityState, setCityState] = useState(city)
    const [coord, setCoord] = useState({lat:0,lon:0})

    const {status,response}=useApiCall<WeatherResponse,WeatherProps>({
        func:callWeatherApi,
        params:{city:cityState},
        refresh:[cityState]})

    const {status:ForecastStatus,response:ForecastResponse}=useApiCall<ForecastResponse,ForecastProps>({
        func:callForecastApi,
        params:coord,
        refresh:[coord],
        Enable:(coord.lon !=0 && coord.lat!=0 && coord.lat!=0)
    })


    useEffect(() => {
        if (response){
            setCoord(response.coord)
        }
    }, [response]);

    let weather: null|Weather=null
    if (response) {
        weather = {
            city: response.name,
            description: response.weather[0].description,
            humidity: response.main.humidity,
            wind: response.wind.speed,
            icon: response.weather[0].icon,
            daily: [],
        }


        return (
            <div className={'bg-white dark:bg-black shadow-md rounded-lg px-8 py-16 w-2/3 min-h-[600px]'}>
                <div className={'flex flex-col items-center mb-8'}>
                    <Image src={'LogoNavax.svg'} alt={'Navax collage'} width={86} height={44}/>
                </div>
                <SearchForm city={cityState} setCityState={setCityState}/>

                <ApiLoader status={status}>
                    {weather &&<WeatherInfo weather={weather}/>}
                    {
                        <ApiLoader status={ForecastStatus}>
                            { ForecastResponse && <ForecastList forecast={ForecastResponse}/>}
                        </ApiLoader>
                    }
                </ApiLoader>

            </div>
        );
    }
}