
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Plant } from "@/data/plantsData";

interface PlantCardProps {
  plant: Plant;
  onClick: () => void;
}

export const PlantCard = ({ plant, onClick }: PlantCardProps) => {
  const categoryColors = {
    digestive: "bg-orange-100 text-orange-800",
    immunity: "bg-blue-100 text-blue-800",
    skincare: "bg-pink-100 text-pink-800",
    respiratory: "bg-purple-100 text-purple-800",
    "pain-relief": "bg-red-100 text-red-800",
  };

  const regionColors = {
    india: "bg-yellow-100 text-yellow-800",
    china: "bg-red-100 text-red-800",
    europe: "bg-blue-100 text-blue-800",
    americas: "bg-green-100 text-green-800",
    africa: "bg-orange-100 text-orange-800",
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-green-200 hover:border-green-400 group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge className={categoryColors[plant.category as keyof typeof categoryColors]}>
            {plant.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors">
            {plant.name}
          </h3>
          <Badge variant="outline" className={regionColors[plant.region as keyof typeof regionColors]}>
            {plant.region}
          </Badge>
        </div>
        
        <p className="text-sm text-green-600 italic mb-2">{plant.scientificName}</p>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {plant.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {plant.commonNames.slice(0, 2).map((name, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {name}
            </Badge>
          ))}
          {plant.commonNames.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{plant.commonNames.length - 2} more
            </Badge>
          )}
        </div>
        
        <div className="text-xs text-green-700">
          <strong>Uses:</strong> {plant.medicinalUses.slice(0, 2).join(", ")}
          {plant.medicinalUses.length > 2 && "..."}
        </div>
      </CardContent>
    </Card>
  );
};
