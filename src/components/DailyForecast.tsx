import { Card } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"
import { WeatherIcon } from "./WeatherIcon"

interface DailyForecastProps {
  dailyForecast: Array<{
    datetime: string
    tempmax: number
    tempmin: number
    icon: string
  }>
}

const DailyForecast = ({ dailyForecast }: DailyForecastProps) => {
  return (
    <Card className="w-full lg:w-72 px-4 md:px-5 pt-6 pb-6 select-none">
      <div className="flex gap-2 mb-4 md:mb-6">
        <span className="flex justify-center w-full text-lg md:text-xl font-semibold">Daily Forecasts</span>
      </div>
      <ScrollArea className="h-[280px] md:h-[432px] pr-4">
        <div className="space-y-2">
          {dailyForecast.map((forecast) => (
            <div key={forecast.datetime} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
              <div className="text-sm">
                {new Date(forecast.datetime).toLocaleDateString("en-US", { weekday: "long" })}
              </div>
              <div className="flex items-center gap-3">
                <WeatherIcon icon={forecast.icon} size={20} />
                <div className="text-sm font-medium">
                  {forecast.tempmax.toFixed(0)}/{forecast.tempmin.toFixed(0)}°
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}

export default DailyForecast

