import { 
  Cloud, 
  CloudFog, 
  CloudLightning, 
  CloudRain, 
  CloudSnow, 
  Sun, 
  SunDim, 
  CloudDrizzle, 
  Wind, 
  Moon 
} from 'lucide-react';


interface WeatherIconProps {
  icon: string
  size?: number
}

export function WeatherIcon({ icon, size = 24 }: WeatherIconProps) {
  switch (icon) {
    case "clear-day":
      return <Sun size={size} className="text-yellow-400" />;
    case "clear-night":
      return <Moon size={size} className="text-yellow-300" />;
    case "partly-cloudy-day":
      return <SunDim size={size} className="text-yellow-500" />;
    case "partly-cloudy-night":
      return <SunDim size={size} className="text-yellow-400" />;
    case "cloudy":
      return <Cloud size={size} className="text-gray-500" />;
    case "rain":
      return <CloudRain size={size} className="text-blue-500" />;
    case "snow":
      return <CloudSnow size={size} className="text-white" />;
    case "snow-showers-day":
      return <CloudSnow size={size} className="text-white" />;
    case "snow-showers-night":
      return <CloudSnow size={size} className="text-white" />;
    case "thunder-rain":
      return <CloudLightning size={size} className="text-purple-600" />;
    case "thunder-showers-day":
      return <CloudLightning size={size} className="text-purple-500" />;
    case "thunder-showers-night":
      return <CloudLightning size={size} className="text-purple-400" />;
    case "showers-day":
      return <Cloud size={size} className="text-blue-500" />;
    case "showers-night":
      return <Cloud size={size} className="text-blue-400" />;
    case "fog":
      return <CloudFog size={size} className="text-gray-700" />;
    case "wind":
      return <Wind size={size} className="text-gray-600" />;
    case "cloud-drizzle":
      return <CloudDrizzle size={size} className="text-teal-500" />;
    default:
      return <Sun size={size} className="text-yellow-400" />;
  }
}
