
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Plant } from "@/data/plantsData";

interface PlantDetailModalProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlantDetailModal = ({ plant, isOpen, onClose }: PlantDetailModalProps) => {
  if (!plant) return null;

  const categoryColors = {
    digestive: "bg-orange-100 text-orange-800",
    immunity: "bg-blue-100 text-blue-800",
    skincare: "bg-pink-100 text-pink-800",
    respiratory: "bg-purple-100 text-purple-800",
    "pain-relief": "bg-red-100 text-red-800",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-800 flex items-center gap-3">
            {plant.name}
            <Badge className={categoryColors[plant.category as keyof typeof categoryColors]}>
              {plant.category}
            </Badge>
          </DialogTitle>
          <p className="text-green-600 italic">{plant.scientificName}</p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h4 className="font-semibold text-green-800 mb-2">Common Names:</h4>
              <div className="flex flex-wrap gap-1">
                {plant.commonNames.map((name, index) => (
                  <Badge key={index} variant="secondary">
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <ScrollArea className="h-96">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="medicinal">Medicinal</TabsTrigger>
                <TabsTrigger value="cultivation">Growing</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Description</h4>
                  <p className="text-gray-700">{plant.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Habitat</h4>
                  <p className="text-gray-700">{plant.habitat}</p>
                </div>
              </TabsContent>

              <TabsContent value="medicinal" className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Medicinal Uses</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {plant.medicinalUses.map((use, index) => (
                      <li key={index} className="text-gray-700">{use}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {plant.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="cultivation" className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Cultivation Guide</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {plant.cultivation.map((tip, index) => (
                      <li key={index} className="text-gray-700">{tip}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="safety" className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Precautions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {plant.precautions.map((precaution, index) => (
                      <li key={index} className="text-red-700">{precaution}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Always consult with a healthcare professional before using medicinal plants, especially if you have existing health conditions or are taking medications.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
