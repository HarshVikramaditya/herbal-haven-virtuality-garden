
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌿</span>
            </div>
            <span className="text-xl font-bold text-green-800">Virtual Herbal Garden</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-green-700 hover:text-green-900 transition-colors">Home</a>
            <a href="#plants" className="text-green-700 hover:text-green-900 transition-colors">Plants</a>
            <a href="#tours" className="text-green-700 hover:text-green-900 transition-colors">Virtual Tours</a>
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">About</a>
            <Button className="bg-green-600 hover:bg-green-700">
              <Search className="w-4 h-4 mr-2" />
              Explore
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-200">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-green-700 hover:text-green-900 transition-colors px-2 py-1">Home</a>
              <a href="#plants" className="text-green-700 hover:text-green-900 transition-colors px-2 py-1">Plants</a>
              <a href="#tours" className="text-green-700 hover:text-green-900 transition-colors px-2 py-1">Virtual Tours</a>
              <a href="#about" className="text-green-700 hover:text-green-900 transition-colors px-2 py-1">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
