import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { WeatherIcon } from "./WeatherIcon"
import type { HourlyForecast } from "@/types"

interface TodayForecastProps {
  hourlyForecast: HourlyForecast[]
}

const TodayForecast = ({ hourlyForecast }: TodayForecastProps) => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 uppercase">Today's forecasts</div>
      <Carousel className="w-full">
        <CarouselContent className="">
          {hourlyForecast.map((forecast, index) => (
            <CarouselItem key={index} className="basis-1/5 sm:basis-1/7 md:basis-1/8">
              <Card>
                <CardContent className="p-2 md:p-4">
                  <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <div className="text-sm text-gray-600">{forecast.datetime.slice(0, 5)}</div>
                    <WeatherIcon icon={forecast.icon} size={24} />
                    <div className="font-medium">{forecast.temp.toFixed(1)}°</div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default TodayForecast

