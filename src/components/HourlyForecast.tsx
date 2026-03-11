import { useEffect } from 'react'
import { WeatherIcon } from './WeatherIcon'
import type { HourlyForecast as HourlyForecastType } from '../types/weather'
import { formatHour } from '../utils/weatherUtils'
import useEmblaCarousel from 'embla-carousel-react'

interface HourlyForecastProps {
  hours: HourlyForecastType[]
}

export const HourlyForecast = ({ hours }: HourlyForecastProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  const onSelect = () => {
    if (!emblaApi) return
  }

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi])

  if (!hours || hours.length === 0) {
    return null
  }

  return (
    <div className="space-y-3 select-none">
      <div className="relative bg-white rounded-xl overflow-hidden">
        <div className="overflow-hidden pr-4" ref={emblaRef}>
          <div className="flex gap-3 p-4">
            {hours.map((hour, index) => (
              <div
                key={`${hour.time}-${index}`}
                className="shrink-0 w-16 sm:w-22 bg-linear-to-b from-blue-50 to-blue-100 rounded-lg p-2 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-semibold text-gray-700 mb-2">
                  {formatHour(hour.time)}
                </div>
                <div className="flex justify-center mb-2">
                  <WeatherIcon code={hour.condition.code} size={28} />
                </div>
                <div className="text-sm font-bold text-gray-800">{hour.temp_c.toFixed(0)}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
