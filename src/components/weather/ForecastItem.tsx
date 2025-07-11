import {List} from "@/types/api/ForecastResponse";
import WeatherIcon from "@/components/weather/WeatherIcon";

interface Props {
    item:List
}

export function ForecastItem({ item }: Props) {
    const day = new Date(item.dt * 1000).toLocaleString("en-us", {
        weekday: "long",
    });

    return (
        <div className="flex flex-col items-center justify-between text-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">

            <div className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {day}
            </div>


            <div className="my-2">
                <WeatherIcon icon={item.weather[0].icon} size={36} />
            </div>


            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        <span className="text-primary font-semibold">
          {Math.round(item.main.temp_min)}
        </span>
                &nbsp;–&nbsp;
                <span className="text-primary font-semibold">
          {Math.round(item.main.temp_max)}
        </span>
                <span className="ml-1 text-xs">°C</span>
            </div>
        </div>
    );
}