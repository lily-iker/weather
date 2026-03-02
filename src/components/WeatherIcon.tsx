import { getWeatherIcon, getWeatherIconColor } from '../utils/weatherUtils'

interface WeatherIconProps {
  code: number
  size?: number
  className?: string
}

export const WeatherIcon = ({ code, size = 24, className = '' }: WeatherIconProps) => {
  const IconComponent = getWeatherIcon(code)
  const colorClass = getWeatherIconColor(code)
  const finalClassName = className || colorClass
  
  return <IconComponent size={size} className={finalClassName} />
}
