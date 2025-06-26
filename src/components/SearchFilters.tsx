
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

export const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
}: SearchFiltersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-green-100">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Find Your Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
          <Input
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-green-200 focus:border-green-500"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="border-green-200 focus:border-green-500">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="digestive">Digestive Health</SelectItem>
            <SelectItem value="immunity">Immunity</SelectItem>
            <SelectItem value="skincare">Skin Care</SelectItem>
            <SelectItem value="respiratory">Respiratory</SelectItem>
            <SelectItem value="pain-relief">Pain Relief</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="border-green-200 focus:border-green-500">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="china">China</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="americas">Americas</SelectItem>
            <SelectItem value="africa">Africa</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
