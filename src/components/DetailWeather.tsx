import { Card } from "./ui/card"

interface DetailWeatherProps {
  feelsLike: number
  wind: number
  pressure: number
  uvIndex: number
  tempmax: number
  tempmin: number
}

const DetailWeather = ({ feelsLike, wind, pressure, uvIndex, tempmax, tempmin }: DetailWeatherProps) => {
  return (
    <div>
      <Card className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-sm text-gray-500">Real Feel</div>
            <div className="text-2xl font-medium">{feelsLike.toFixed(1)}°</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Wind</div>
            <div className="text-2xl font-medium">{wind.toFixed(1)} km/h</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Pressure</div>
            <div className="text-2xl font-medium">{pressure.toFixed(1)}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">UV index</div>
            <div className="text-2xl font-medium">{uvIndex}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Max Temp</div>
            <div className="text-2xl font-medium">{tempmax.toFixed(1)}°</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Min Temp</div>
            <div className="text-2xl font-medium">{tempmin.toFixed(1)}°</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default DetailWeather

