
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickStart from "@/components/QuickStart";
import PopularApis from "@/components/PopularApis";
import ApiStatus from "@/components/ApiStatus";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <QuickStart />
          </div>
          <div>
            <ApiStatus />
          </div>
        </div>
        
        <div className="mb-16">
          <PopularApis />
        </div>
        
        {/* Additional sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border hover:border-[#F37321] transition-colors">
            <h3 className="text-lg font-semibold text-[#1B2A3B] mb-3">
              🏦 Bank Integration
            </h3>
            <p className="text-gray-600 mb-4">
              Connect to all major Ethiopian banks with standardized APIs for payments, transfers, and account management.
            </p>
            <a href="#" className="text-[#F37321] hover:text-[#e06314] font-medium">
              Learn more →
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border hover:border-[#F37321] transition-colors">
            <h3 className="text-lg font-semibold text-[#1B2A3B] mb-3">
              📱 Mobile Wallets
            </h3>
            <p className="text-gray-600 mb-4">
              Integrate with popular mobile wallet providers like M-Birr, HelloCash, and Amole through unified APIs.
            </p>
            <a href="#" className="text-[#F37321] hover:text-[#e06314] font-medium">
              Explore APIs →
            </a>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border hover:border-[#F37321] transition-colors">
            <h3 className="text-lg font-semibold text-[#1B2A3B] mb-3">
              🔐 Security First
            </h3>
            <p className="text-gray-600 mb-4">
              Enterprise-grade security with PCI-DSS compliance, end-to-end encryption, and fraud detection.
            </p>
            <a href="#" className="text-[#F37321] hover:text-[#e06314] font-medium">
              Security docs →
            </a>
          </div>
        </div>
        
        {/* Statistics section */}
        <div className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-bold text-[#1B2A3B] text-center mb-8">
            Trusted by Ethiopian Fintech Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#F37321] mb-2">15+</div>
              <div className="text-gray-600">Partner Banks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F37321] mb-2">8+</div>
              <div className="text-gray-600">Mobile Wallets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F37321] mb-2">100+</div>
              <div className="text-gray-600">Active Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F37321] mb-2">1M+</div>
              <div className="text-gray-600">Daily Transactions</div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
