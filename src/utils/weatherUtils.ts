import { Cloud, CloudRain, Sun, type LucideIcon } from 'lucide-react'

// Weather condition code mapping to Lucide icons
export const getWeatherIcon = (code: number): LucideIcon => {
  // Clear/Sunny
  if (code === 1000) return Sun

  // Partly cloudy
  if (code === 1003) {
    return Cloud
  }

  // Mostly cloudy
  if (code === 1006 || code === 1009) {
    return Cloud
  }

  // Overcast
  if (code === 1009) {
    return Cloud
  }

  // Mist/Fog
  if (code === 1030 || code === 1135 || code === 1147) {
    return Cloud
  }

  // Patchy rain possible, Patchy light rain
  if (
    code === 1063 ||
    code === 1150 ||
    code === 1153 ||
    code === 1168 ||
    code === 1171 ||
    code === 1180 ||
    code === 1183 ||
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195
  ) {
    return CloudRain
  }

  // Light/Moderate/Heavy rain
  if (
    code === 1198 ||
    code === 1201 ||
    code === 1204 ||
    code === 1207 ||
    code === 1210 ||
    code === 1213 ||
    code === 1216 ||
    code === 1219 ||
    code === 1222 ||
    code === 1225 ||
    code === 1240 ||
    code === 1243 ||
    code === 1246
  ) {
    return CloudRain
  }

  // Light/Moderate/Heavy sleet, Blizzard
  if (
    code === 1249 ||
    code === 1252 ||
    code === 1255 ||
    code === 1258 ||
    code === 1261 ||
    code === 1264 ||
    code === 1273 ||
    code === 1276 ||
    code === 1279 ||
    code === 1282
  ) {
    return CloudRain
  }

  // Default to cloud
  return Cloud
}

// Get color class based on weather condition code
export const getWeatherIconColor = (code: number): string => {
  // Clear/Sunny - Yellow/Gold
  if (code === 1000) return 'text-yellow-400'

  // Partly cloudy - Gray
  if (code === 1003) return 'text-gray-400'

  // Mostly cloudy/Overcast - Gray
  if (code === 1006 || code === 1009) return 'text-gray-500'

  // Mist/Fog - Gray
  if (code === 1030 || code === 1135 || code === 1147) return 'text-gray-600'

  // Rain related - Blue
  if (
    code === 1063 ||
    code === 1150 ||
    code === 1153 ||
    code === 1168 ||
    code === 1171 ||
    code === 1180 ||
    code === 1183 ||
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195 ||
    code === 1198 ||
    code === 1201 ||
    code === 1204 ||
    code === 1207 ||
    code === 1210 ||
    code === 1213 ||
    code === 1216 ||
    code === 1219 ||
    code === 1222 ||
    code === 1225 ||
    code === 1240 ||
    code === 1243 ||
    code === 1246 ||
    code === 1249 ||
    code === 1252 ||
    code === 1255 ||
    code === 1258 ||
    code === 1261 ||
    code === 1264 ||
    code === 1273 ||
    code === 1276 ||
    code === 1279 ||
    code === 1282
  ) {
    return 'text-blue-500'
  }

  // Default gray
  return 'text-gray-400'
}

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export const formatHour = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    hour12: true,
  })
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export const getDayName = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
  })
}

export const getNext24HoursForecast = (forecastData: any[]): any[] => {
  if (!forecastData || forecastData.length === 0) return []

  const today = new Date()
  today.setHours(today.getHours() + 1) // Start from next hour

  const next24Hours: any[] = []

  // Get remaining hours from today
  if (forecastData[0]?.hour) {
    forecastData[0].hour.forEach((hour: any) => {
      const hourTime = new Date(hour.time)
      if (hourTime >= today && next24Hours.length < 24) {
        next24Hours.push(hour)
      }
    })
  }

  // Get hours from tomorrow if needed
  if (next24Hours.length < 24 && forecastData[1]?.hour) {
    forecastData[1].hour.forEach((hour: any) => {
      if (next24Hours.length < 24) {
        next24Hours.push(hour)
      }
    })
  }

  return next24Hours.slice(0, 24)
}
