
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 text-white text-6xl">🌿</div>
        <div className="absolute top-40 right-20 w-16 h-16 text-white text-4xl">🍃</div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 text-white text-5xl">🌱</div>
        <div className="absolute bottom-40 right-1/3 w-18 h-18 text-white text-3xl">🌿</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Explore the World of
          <span className="block text-green-200">Medicinal Plants</span>
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto animate-fade-in">
          Discover traditional healing practices through our interactive virtual garden. 
          Learn about herbs and medicinal plants from around the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-3">
            Start Exploring
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-3">
            Take a Virtual Tour
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};
