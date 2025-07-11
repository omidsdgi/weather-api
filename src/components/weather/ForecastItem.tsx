import {List} from "@/types/api/ForecastResponse";
import WeatherIcon from "@/components/weather/WeatherIcon";

type ForecastItemProps = {
    maxItem: List;
    minItem: List;
};

export function ForecastItem({ maxItem, minItem }: ForecastItemProps) {
    const day = new Date(maxItem.dt * 1000).toLocaleString("en-us", {
        weekday: "long",
    });

    return (
        <div className="flex flex-col items-center justify-between text-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <div className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {day}
            </div>

            <div className="my-2">
                <WeatherIcon icon={maxItem.weather[0].icon} size={36} />
            </div>

            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        <span className="text-primary font-semibold">
          {Math.round(minItem.main.temp)}{/* ساعت 3 */}
        </span>
                &nbsp;–&nbsp;
                <span className="text-primary font-semibold">
          {Math.round(maxItem.main.temp)}{/* ساعت 15 */}
        </span>
                <span className="ml-1 text-xs">°C</span>
            </div>
        </div>
    );
}
