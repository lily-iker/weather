import { Cloud, Loader2 } from 'lucide-react'
import { CurrentWeather } from './CurrentWeather'
import { HourlyForecast } from './HourlyForecast'
import { DailyForecast } from './DailyForecast'
import type { WeatherApiResponse, HourlyForecast as HourlyForecastType } from '../types/weather'

interface MainContentProps {
  weatherData: WeatherApiResponse | null
  hourlyData: HourlyForecastType[]
  loading: boolean
  error: string
}

export const MainContent = ({ weatherData, hourlyData, loading, error }: MainContentProps) => {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16 py-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 flex items-center gap-3">
          <div className="text-lg font-semibold">⚠️</div>
          <div>
            <p className="font-semibold">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="animate-spin mb-4">
            <Loader2 size={48} className="text-teal-300" />
          </div>
          <p className="text-gray-600 font-medium">Loading weather data...</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Current Weather and Hourly */}
          <div className="lg:col-span-2 space-y-6">
            <CurrentWeather data={weatherData} />
            <HourlyForecast hours={hourlyData} />
          </div>

          {/* Right Column - Daily Forecast */}
          <div>{weatherData && <DailyForecast days={weatherData.forecast.forecastday} />}</div>
        </div>
      )}
    </main>
  )
}
