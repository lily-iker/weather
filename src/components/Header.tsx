import { Sun } from 'lucide-react'
import { SearchBar } from './SearchBar'

interface HeaderProps {
  onSearch: (city: string) => void
  defaultValue: string
  isLoading: boolean
}

export const Header = ({ onSearch, defaultValue, isLoading }: HeaderProps) => {
  return (
    <header className="bg-linear-to-r from-teal-400 to-blue-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 py-4">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Sun size={32} />
            <h1 className="text-2xl font-bold">Weather App</h1>
          </div>
          <div className="max-w-full flex justify-center">
            <SearchBar onSearch={onSearch} defaultValue={defaultValue} isLoading={isLoading} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Sun size={32} />
            <h1 className="text-2xl font-bold">Weather App</h1>
          </div>
          <div className="flex-1 max-w-90">
            <SearchBar onSearch={onSearch} defaultValue={defaultValue} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </header>
  )
}
