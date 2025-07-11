import {List} from "@/types/api/ForecastResponse";
import WeatherIcon from "@/components/weather/WeatherIcon";

interface Props {
    item:List
}

export function ForecastItem({item}:Props) {
    let day=new Date(item.dt*1000).toLocaleString('en-us', {weekday: 'long'});
    console.log(day)

    return(
        <div>
            <div className={'flex justify-center items-center flex-col'}>
               <div className={'mt-4 mb-4'}>{day}</div>
                 <WeatherIcon icon={item.weather[0].icon} size={36}/>
                <div className={'mt-4'}>
                 <span className={'text-primary'}>{Math.round(item.main.temp_min)}</span>
                 -
                 <span className={'text-primary'}>{Math.round(item.main.temp_max)}</span>
                </div>
             </div>
        </div>
    )


}