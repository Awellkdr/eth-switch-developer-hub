
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Documentation", href: "/docs", current: location.pathname.startsWith("/docs") },
    { name: "API Playground", href: "/playground", current: location.pathname === "/playground" },
    { name: "Console", href: "/console", current: location.pathname.startsWith("/console") },
    { name: "Support", href: "/support", current: location.pathname === "/support" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ebc44709-c36d-4e63-8e0b-972f66980638.png" 
                alt="ETH Switch Logo" 
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-xl font-bold text-[#1B2A3B]">ETH Switch</h1>
                <p className="text-xs text-gray-600">Developer Portal</p>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#F37321] ${
                  item.current ? "text-[#F37321]" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search docs..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F37321] focus:border-transparent"
              />
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              All Systems Operational
            </Badge>
            <Link to="/get-started">
              <Button size="sm" className="bg-[#F37321] hover:bg-[#e06314] text-white">
                Get API Keys
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-[#F37321] ${
                    item.current ? "text-[#F37321]" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link to="/get-started">
                  <Button size="sm" className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">
                    Get API Keys
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
