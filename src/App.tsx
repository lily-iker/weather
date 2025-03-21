"use client"

import { useState } from "react"
import { Input } from "./components/ui/input"
import MainContent from "./components/MainContent"
import { WeatherData } from "./types"

export default function App() {
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherData = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      console.log("Fetching weather data for", city)
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${weatherApiKey}&contentType=json`
      )

      if (!response.ok) {
        console.log("Failed to fetch weather data")
        throw new Error("City not found. Please try again.")
      }

      console.log("Weather data fetched successfully")
      const data = await response.json()
      setWeatherData(data)
    } catch (error: unknown) {
      console.error("Error fetching weather data:", error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-500 select-none pb-12">
      <header className="px-4 pb-4 pt-6 flex flex-col items-center justify-center gap-6">
        <h1 className="text-blue-500 text-xl font-medium">Weather App</h1>
        <form className="flex gap-2 w-full max-w-md" onSubmit={fetchWeatherData}>
          <Input
            placeholder="Enter your city"
            className="rounded-lg border-blue-400 focus:border-blue-500 py-6"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
          />
        </form>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </header>
      {weatherData && <MainContent weatherData={weatherData} />}
    </div>
  )
}
