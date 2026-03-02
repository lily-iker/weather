import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface SearchBarProps {
  onSearch: (city: string) => void
  defaultValue?: string
  isLoading?: boolean
}

export const SearchBar = ({ onSearch, defaultValue = '', isLoading = false }: SearchBarProps) => {
  const [value, setValue] = useState(defaultValue)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      onSearch(value.trim())
    }
  }

  const handleClear = () => {
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search city..."
          disabled={isLoading}
          className="w-full pl-12 pr-12 py-2 rounded-lg border-2 border-blue-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 disabled:opacity-50"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </form>
  )
}
