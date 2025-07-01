export interface ForecastResponse {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

export interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    visibility: number
    pop: number
    sys: Sys
    dt_txt: string
    rain?: Rain
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Clouds {
    all: number
}

interface Wind {
    speed: number
    deg: number
    gust: number
}

interface Sys {
    pod: string
}

interface Rain {
    "3h": number
}

interface City {
    id: number
    name: string
    coord: Coord
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

interface Coord {
    lat: number
    lon: number
}
