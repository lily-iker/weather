import TodayForecast from "./TodayForecast"
import DailyForecast from "./DailyForecast"
import DetailWeather from "./DetailWeather"
import MainWeather from "./MainWeather"
import type { WeatherData } from "@/types"

interface MainContentProps {
  weatherData: WeatherData
}

const MainContent = ({ weatherData }: MainContentProps) => {
  return (
    <main className="w-full max-w-3xl mx-auto space-y-6 px-4 pt-4">
      <div className="flex flex-col lg:flex-row items-start lg:justify-center gap-6">
        <div className="flex-1 w-full space-y-6">
          <MainWeather
            city={weatherData.resolvedAddress}
            timezone={weatherData.timezone}
            temperature={weatherData.currentConditions.temp}
            icon={weatherData.currentConditions.icon}
          />
          <TodayForecast hourlyForecast={weatherData.days[0].hours} />
          <DetailWeather
            feelsLike={weatherData.currentConditions.feelslike}
            wind={weatherData.currentConditions.windspeed}
            pressure={weatherData.currentConditions.pressure}
            uvIndex={weatherData.currentConditions.uvindex}
            tempmax={weatherData.days[0].tempmax}
            tempmin={weatherData.days[0].tempmin}
          />
        </div>
        <div className="w-full lg:w-auto">
          <DailyForecast dailyForecast={weatherData.days} />
        </div>
      </div>
    </main>
  )
}

export default MainContent

