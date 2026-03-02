import { WeatherIcon } from './WeatherIcon'
import type { ForecastDay } from '../types/weather'
import { getDayName } from '../utils/weatherUtils'

interface DailyForecastProps {
  days: ForecastDay[]
}

export const DailyForecast = ({ days }: DailyForecastProps) => {
  if (!days || days.length === 0) {
    return null
  }

  return (
    <div className="space-y-4 pt-4">
      <h3 className="text-lg font-bold text-gray-800">Daily Forecasts</h3>

      <div className="bg-white rounded-xl overflow-hidden flex flex-col max-h-133">
        <div className="forecast-scroll overflow-y-auto flex-1">
          <div className="divide-y divide-gray-200">
            {days.map((day, index) => (
              <div
                key={`${day.date}-${index}`}
                className="flex items-center justify-between p-4 hover:bg-gray-200 transition-colors"
              >
                {/* Day name - left */}
                <div className="w-20 font-semibold text-gray-800 shrink-0">
                  {index === 0 ? 'Today' : getDayName(day.date)}
                </div>

                {/* Weather icon - center */}
                <div className="flex justify-center flex-1">
                  <WeatherIcon code={day.day.condition.code} size={24} />
                </div>

                {/* Temperatures - right */}
                <div className="text-right shrink-0">
                  <span className="text-lg font-bold text-gray-800">
                    {day.day.maxtemp_c.toFixed(0)}°
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {day.day.mintemp_c.toFixed(0)}°
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
