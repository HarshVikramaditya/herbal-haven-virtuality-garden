
import { useState } from "react";
import { plantsData } from "@/data/plantsData";
import { PlantCard } from "./PlantCard";
import { PlantDetailModal } from "./PlantDetailModal";
import type { Plant } from "@/data/plantsData";

interface PlantGridProps {
  searchTerm: string;
  selectedCategory: string;
  selectedRegion: string;
}

export const PlantGrid = ({ searchTerm, selectedCategory, selectedRegion }: PlantGridProps) => {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = plantsData.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.commonNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || plant.category === selectedCategory;
    const matchesRegion = selectedRegion === "all" || plant.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Medicinal Plants Collection</h2>
        <p className="text-green-600">
          Showing {filteredPlants.length} plants
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onClick={() => setSelectedPlant(plant)}
          />
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌿</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">No plants found</h3>
          <p className="text-green-600">Try adjusting your search criteria</p>
        </div>
      )}

      <PlantDetailModal
        plant={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </>
  );
};
