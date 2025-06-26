
import { useState } from "react";
import { PlantGrid } from "@/components/PlantGrid";
import { HeroSection } from "@/components/HeroSection";
import { SearchFilters } from "@/components/SearchFilters";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
        <PlantGrid
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedRegion={selectedRegion}
        />
      </div>
    </div>
  );
};

export default Index;
