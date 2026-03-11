import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import type { WeatherApiResponse, HourlyForecast as HourlyForecastType } from './types/weather'
import { getNext24HoursForecast } from './utils/weatherUtils'

const API_KEY = 'c67f707e795248a8a5f131733260103'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null)
  const [hourlyData, setHourlyData] = useState<HourlyForecastType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (cityName: string) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(cityName)}&days=14&aqi=no&alerts=no`
      )

      if (!response.ok) {
        throw new Error('City not found. Please try another city.')
      }

      const data: WeatherApiResponse = await response.json()
      setWeatherData(data)
      setCity(data.location.name)

      // Get next 24 hours of forecast
      const next24 = getNext24HoursForecast(data.forecast.forecastday)
      setHourlyData(next24)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch weather data'
      setError(errorMessage)
      setWeatherData(null)
      setHourlyData([])
    } finally {
      setLoading(false)
    }
  }

  // Fetch default city on mount
  useEffect(() => {
    fetchWeather('ha noi')
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-100 via-blue-50 to-teal-50 flex flex-col">
      <Header onSearch={fetchWeather} defaultValue={city} isLoading={loading} />
      <MainContent
        weatherData={weatherData}
        hourlyData={hourlyData}
        loading={loading}
        error={error}
      />
    </div>
  )
}

export default App
