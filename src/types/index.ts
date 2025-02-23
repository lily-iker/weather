export interface WeatherData {
    resolvedAddress: string
    timezone: string
    currentConditions: {
        temp: number
        feelslike: number
        humidity: number
        windspeed: number
        pressure: number
        uvindex: number
        icon: string
    }
    days: Array<{
        datetime: string
        tempmax: number
        tempmin: number
        icon: string
        hours: Array<{
        datetime: string
        temp: number
        icon: string
        }>
    }>
}

export interface HourlyForecast {
    datetime: string
    temp: number
    icon: string
}