
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickStart from "@/components/QuickStart";
import PopularApis from "@/components/PopularApis";
import ApiStatus from "@/components/ApiStatus";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  Star,
  TrendingUp,
  Globe,
  Clock,
  Code,
  Smartphone,
  CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Process payments in under 3 seconds with our optimized infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption and PCI-DSS compliance for complete peace of mind"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Universal Coverage",
      description: "Connect to all major Ethiopian banks and mobile wallet providers"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer First",
      description: "RESTful APIs, comprehensive SDKs, and detailed documentation"
    }
  ];

  const testimonials = [
    {
      quote: "ETH Switch transformed our payment processing. Integration was seamless and support is exceptional.",
      author: "Sarah Ahmed",
      role: "CTO at TechCorp Ethiopia",
      rating: 5
    },
    {
      quote: "The API reliability and speed are impressive. Our customers love the smooth payment experience.",
      author: "Michael Tadesse",
      role: "Lead Developer at StartupET",
      rating: 5
    },
    {
      quote: "Best payment infrastructure in Ethiopia. Comprehensive documentation made integration a breeze.",
      author: "Hanna Bekele",
      role: "Product Manager at FinanceApp",
      rating: 5
    }
  ];

  const useCases = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "E-commerce Platforms",
      description: "Enable seamless checkout experiences with multiple payment options",
      features: ["One-click payments", "Mobile wallet integration", "Automatic reconciliation"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Fintech Applications",
      description: "Build powerful financial services with our robust payment infrastructure",
      features: ["Real-time transfers", "Batch processing", "Compliance monitoring"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Marketplace Solutions",
      description: "Facilitate secure transactions between buyers and sellers",
      features: ["Escrow services", "Split payments", "Fraud detection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F37321]/10 text-[#F37321] border-[#F37321]/20">
              Why Choose ETH Switch
            </Badge>
            <h2 className="text-4xl font-bold text-[#1B2A3B] mb-4">
              Built for Modern Payment Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive payment infrastructure is designed to scale with your business, 
              from startup to enterprise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F37321] to-[#e06314] rounded-lg flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B2A3B] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16">
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
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-[#1B2A3B]/5 to-[#F37321]/5 rounded-3xl mb-20">
          <div className="text-center mb-16 px-8">
            <h2 className="text-4xl font-bold text-[#1B2A3B] mb-4">
              Powering Innovation Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to fintech, our APIs enable secure and efficient payment solutions 
              for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 px-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F37321] to-[#e06314] rounded-xl flex items-center justify-center text-white mb-4">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-[#1B2A3B] text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#F37321]/10 text-[#F37321] border-[#F37321]/20">
                Developer Experience
              </Badge>
              <h2 className="text-4xl font-bold text-[#1B2A3B] mb-6">
                Integration Made Simple
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get started in minutes with our comprehensive SDKs, detailed documentation, 
                and interactive API playground. No complex setup required.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">RESTful APIs with predictable responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SDKs for popular programming languages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Sandbox environment for testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Comprehensive error handling</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-started">
                  <Button className="bg-[#F37321] hover:bg-[#e06314] text-white">
                    Start Building
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button variant="outline" className="border-[#F37321] text-[#F37321] hover:bg-[#F37321] hover:text-white">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-[#1B2A3B] rounded-xl p-6 text-green-400 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-2">Integration Example</span>
              </div>
              <pre className="overflow-x-auto">{`// Install ETH Switch SDK
npm install ethswitch-sdk

// Initialize client
import { EthSwitch } from 'ethswitch-sdk';

const client = new EthSwitch({
  apiKey: 'your_api_key',
  environment: 'sandbox'
});

// Create instant payment
const payment = await client.payments.create({
  amount: 1000.00,
  currency: 'ETB',
  fromAccount: 'acc_123',
  toAccount: 'acc_456',
  description: 'Payment for services'
});

console.log('Payment created:', payment.id);`}</pre>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2A3B] mb-4">
              Trusted by Ethiopian Innovators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of developers and businesses building the future of payments in Ethiopia
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-[#1B2A3B]">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Statistics Section */}
        <section className="py-20">
          <Card className="bg-gradient-to-r from-[#1B2A3B] to-[#2a3b4d] text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F37321]/10 to-transparent"></div>
            <CardContent className="p-12 relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Powering Ethiopia's Digital Economy
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Our platform processes millions of transactions, connecting businesses 
                  and consumers across the country.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-[#F37321]" />
                    <div className="text-4xl font-bold text-[#F37321]">15+</div>
                  </div>
                  <div className="text-blue-100">Partner Banks</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Smartphone className="w-6 h-6 text-[#F37321]" />
                    <div className="text-4xl font-bold text-[#F37321]">8+</div>
                  </div>
                  <div className="text-blue-100">Mobile Wallets</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-6 h-6 text-[#F37321]" />
                    <div className="text-4xl font-bold text-[#F37321]">500+</div>
                  </div>
                  <div className="text-blue-100">Active Developers</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-6 h-6 text-[#F37321]" />
                    <div className="text-4xl font-bold text-[#F37321]">5M+</div>
                  </div>
                  <div className="text-blue-100">Monthly Transactions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Card className="bg-gradient-to-r from-[#F37321] to-[#e06314] text-white text-center">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join the payment revolution in Ethiopia. Get your API keys and start building 
                amazing payment experiences today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button size="lg" className="bg-white text-[#F37321] hover:bg-gray-100">
                    Get API Keys Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/playground">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Try Our APIs
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
