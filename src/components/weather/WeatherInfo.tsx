import WeatherIcon from "@/components/weather/WeatherIcon";

interface Props {
    weather:Weather;
}

export function WeatherInfo({ weather }: Props) {
    return (
        <div className="grid grid-cols-2 gap-4 mb-12 items-center">

            <div>
                <h1 className="text-xl sm:text-2xl font-semibold">{weather.city}</h1>
                <div className="text-sm sm:text-base">{weather.description}</div>
                <div className="text-sm sm:text-base mt-1">
                    Humidity: <span className="text-primary">{weather.humidity}</span>, Wind:{" "}
                    <span className="text-primary">{weather.wind} km/h</span>
                </div>
            </div>


            <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                <WeatherIcon size={46}  icon={weather.icon} />
            </div>
        </div>
    );
}
