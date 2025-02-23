import { Card, CardContent } from "@/components/ui/card"
import { WeatherIcon } from "../WeatherIcon.tsx"

interface HourlyForecastProps {
  hours: Array<{
    datetime: string
    temp: number
    icon: string
  }>
}

export function HourlyForecast({ hours }: HourlyForecastProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {hours.slice(0, 12).map((hour, index) => (
        <Card key={index}>
          <CardContent className="flex flex-col items-center p-4">
            <p className="text-sm">{hour.datetime.slice(0, 5)}</p>
            <WeatherIcon icon={hour.icon} size={32} />
            <p className="text-lg font-bold">{hour.temp}°C</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

