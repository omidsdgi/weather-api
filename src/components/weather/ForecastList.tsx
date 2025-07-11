import {ForecastItem} from "@/components/weather/ForecastItem";
import {ForecastResponse, List} from "@/types/api/ForecastResponse";

interface Props {
   forecast: ForecastResponse;
}

export function ForecastList({forecast}:Props) {

    const dailyForecast=forecast.list.filter((item)=>{
        const date=new Date(item.dt*1000);
        const hour=date.getHours();
        return hour ===15
    })
    if(dailyForecast.length ===0){
        return <p>  "هیچ داده ای برای ساعت 15 یافت نشد</p>
    }

    return (
        <div  className={'grid grid-cols-5'}>
            {
                dailyForecast.map((item:List,index:number) => {
                    return <ForecastItem key={index} item={item}/>
                })
            }
            </div>
    );
}