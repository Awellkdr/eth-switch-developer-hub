
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Book, Code, Zap, Shield, CreditCard, Smartphone, QrCode, Webhook, FileText, Play, Download, Star, Clock, CheckCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const products = [
    {
      id: "instant-payments",
      name: "Instant Payments",
      description: "Real-time payment processing and transfers with immediate settlement",
      icon: <Zap className="w-6 h-6" />,
      detailsPath: "/docs/instant-payments",
      color: "from-blue-500 to-cyan-500",
      status: "stable",
      overview: {
        title: "Instant Payments Overview",
        description: "Process real-time payments with immediate settlement across all supported banks and financial institutions in Ethiopia. Our instant payment system ensures your transactions are completed within seconds.",
        features: [
          "Real-time processing under 3 seconds",
          "Immediate settlement guarantee", 
          "24/7 availability with 99.9% uptime",
          "Multi-bank support across Ethiopia",
          "End-to-end transaction tracking",
          "Advanced fraud detection"
        ]
      },
      apis: [
        { name: "Create Payment", endpoint: "POST /v1/payments/instant", description: "Initiate an instant payment transaction", status: "stable" },
        { name: "Payment Status", endpoint: "GET /v1/payments/{id}/status", description: "Check real-time payment status", status: "stable" },
        { name: "Cancel Payment", endpoint: "POST /v1/payments/{id}/cancel", description: "Cancel pending payment request", status: "stable" },
        { name: "Payment History", endpoint: "GET /v1/payments/history", description: "Retrieve comprehensive payment history", status: "stable" }
      ]
    },
    {
      id: "bank-transfers",
      name: "Bank Transfers", 
      description: "Secure inter-bank transfer operations with SWIFT integration",
      icon: <CreditCard className="w-6 h-6" />,
      detailsPath: "/docs/bank-transfers",
      color: "from-emerald-500 to-teal-500",
      status: "stable",
      overview: {
        title: "Bank Transfers Overview",
        description: "Facilitate secure inter-bank transfers with support for all major Ethiopian banks and international transfer protocols. Built with enterprise-grade security and compliance.",
        features: [
          "Inter-bank transfers nationwide",
          "SWIFT integration for international transfers",
          "Batch processing capabilities",
          "Configurable transaction limits",
          "Real-time compliance checks",
          "Multi-currency support"
        ]
      },
      apis: [
        { name: "Create Transfer", endpoint: "POST /v1/transfers/bank", description: "Initiate secure bank transfer", status: "stable" },
        { name: "Transfer Status", endpoint: "GET /v1/transfers/{id}", description: "Get detailed transfer information", status: "stable" },
        { name: "Batch Transfer", endpoint: "POST /v1/transfers/batch", description: "Process multiple transfers efficiently", status: "stable" },
        { name: "Bank Directory", endpoint: "GET /v1/banks", description: "List all supported banking institutions", status: "stable" }
      ]
    },
    {
      id: "mobile-wallets",
      name: "Mobile Wallets",
      description: "Comprehensive mobile wallet integrations and transfers",
      icon: <Smartphone className="w-6 h-6" />,
      detailsPath: "/docs/mobile-wallets",
      color: "from-purple-500 to-pink-500",
      status: "beta",
      overview: {
        title: "Mobile Wallets Overview",
        description: "Connect with popular mobile wallet providers in Ethiopia including Telebirr, M-Birr, and HelloCash for seamless mobile payments and enhanced customer reach.",
        features: [
          "Multi-wallet provider support",
          "USSD integration capabilities",
          "Push notification system",
          "Offline transaction processing",
          "Real-time balance inquiries",
          "Mobile-optimized interfaces"
        ]
      },
      apis: [
        { name: "Wallet Payment", endpoint: "POST /v1/wallets/payment", description: "Process mobile wallet payment", status: "beta" },
        { name: "Wallet Balance", endpoint: "GET /v1/wallets/balance", description: "Check wallet balance in real-time", status: "beta" },
        { name: "Wallet Transfer", endpoint: "POST /v1/wallets/transfer", description: "Transfer funds between wallets", status: "beta" },
        { name: "Wallet Providers", endpoint: "GET /v1/wallets/providers", description: "List available wallet providers", status: "stable" }
      ]
    },
    {
      id: "qr-payments",
      name: "QR Code Payments",
      description: "EMVCo compliant QR-based payment solutions",
      icon: <QrCode className="w-6 h-6" />,
      detailsPath: "/docs/qr-payments",
      color: "from-orange-500 to-red-500",
      status: "stable",
      overview: {
        title: "QR Code Payments Overview",
        description: "Enable quick and secure QR code-based payments for merchants and customers with EMVCo compliant QR standards and dynamic code generation.",
        features: [
          "EMVCo compliance certification",
          "Dynamic QR code generation",
          "Merchant dashboard integration",
          "Customer mobile app support",
          "Automatic receipt generation",
          "Analytics and reporting"
        ]
      },
      apis: [
        { name: "Generate QR", endpoint: "POST /v1/qr/generate", description: "Generate secure payment QR code", status: "stable" },
        { name: "Process QR Payment", endpoint: "POST /v1/qr/payment", description: "Process QR code payment", status: "stable" },
        { name: "QR Status", endpoint: "GET /v1/qr/{id}/status", description: "Check QR payment status", status: "stable" },
        { name: "Merchant QR", endpoint: "POST /v1/qr/merchant", description: "Create persistent merchant QR", status: "stable" }
      ]
    },
    {
      id: "request-to-pay",
      name: "Request to Pay",
      description: "Smart payment request and collection system",
      icon: <Book className="w-6 h-6" />,
      detailsPath: "/docs/request-to-pay",
      color: "from-indigo-500 to-blue-500",
      status: "stable",
      overview: {
        title: "Request to Pay Overview",
        description: "Send payment requests to customers and track collection status with automated notifications, follow-ups, and customizable templates for better conversion rates.",
        features: [
          "Smart payment request system",
          "Real-time collection tracking",
          "Automated reminder scheduling",
          "Multi-channel delivery (SMS, Email, Push)",
          "Customizable payment templates",
          "Analytics and conversion tracking"
        ]
      },
      apis: [
        { name: "Create Request", endpoint: "POST /v1/requests/payment", description: "Send intelligent payment request", status: "stable" },
        { name: "Request Status", endpoint: "GET /v1/requests/{id}", description: "Check detailed request status", status: "stable" },
        { name: "Cancel Request", endpoint: "DELETE /v1/requests/{id}", description: "Cancel pending payment request", status: "stable" },
        { name: "Request History", endpoint: "GET /v1/requests/history", description: "Get comprehensive request history", status: "stable" }
      ]
    },
    {
      id: "webhooks",
      name: "Webhooks & Events",
      description: "Real-time event notifications and integrations",
      icon: <Webhook className="w-6 h-6" />,
      detailsPath: "/docs/webhooks",
      color: "from-gray-600 to-gray-800",
      status: "stable",
      overview: {
        title: "Webhooks Overview",
        description: "Receive real-time notifications about payment events, transaction updates, and system status changes with reliable delivery and comprehensive event filtering.",
        features: [
          "Real-time event notifications",
          "Advanced event filtering",
          "Automatic retry mechanisms",
          "Cryptographic signature verification",
          "Comprehensive event history",
          "Custom endpoint configuration"
        ]
      },
      apis: [
        { name: "Create Webhook", endpoint: "POST /v1/webhooks", description: "Register webhook endpoint", status: "stable" },
        { name: "List Webhooks", endpoint: "GET /v1/webhooks", description: "Get webhook configurations", status: "stable" },
        { name: "Update Webhook", endpoint: "PUT /v1/webhooks/{id}", description: "Update webhook settings", status: "stable" },
        { name: "Test Webhook", endpoint: "POST /v1/webhooks/{id}/test", description: "Test webhook endpoint", status: "stable" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable": return "bg-green-100 text-green-800 border-green-200";
      case "beta": return "bg-blue-100 text-blue-800 border-blue-200";
      case "alpha": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F37321]/10 text-[#F37321] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Developer-First Payment APIs</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1B2A3B] to-[#F37321] bg-clip-text text-transparent mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides and API reference for all ETH Switch payment products and services. 
            Build powerful payment solutions with our developer-friendly APIs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button className="bg-[#F37321] hover:bg-[#e06314] text-white px-8 py-3 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button variant="outline" className="text-[#1B2A3B] border-[#1B2A3B] hover:bg-[#1B2A3B]/5 px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download SDKs
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Quick access cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#1B2A3B]/5 to-[#1B2A3B]/10 hover:from-[#1B2A3B]/10 hover:to-[#1B2A3B]/20">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F37321] to-[#e06314] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚀</span>
              </div>
              <CardTitle className="text-[#1B2A3B] text-xl">Quick Start Guide</CardTitle>
              <CardDescription className="text-gray-600">
                Get up and running in 5 minutes with our comprehensive step-by-step guide and code examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white group-hover:shadow-lg transition-all">
                Start Building
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#F37321]/5 to-[#F37321]/10 hover:from-[#F37321]/10 hover:to-[#F37321]/20">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F37321] to-[#e06314] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🧪</span>
              </div>
              <CardTitle className="text-[#1B2A3B] text-xl">API Playground</CardTitle>
              <CardDescription className="text-gray-600">
                Test our APIs interactively with live examples, real responses, and comprehensive testing tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white group-hover:shadow-lg transition-all">
                Try APIs
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-[#1B2A3B]/5 to-[#F37321]/10 hover:from-[#1B2A3B]/10 hover:to-[#F37321]/20">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F37321] to-[#e06314] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📚</span>
              </div>
              <CardTitle className="text-[#1B2A3B] text-xl">SDKs & Libraries</CardTitle>
              <CardDescription className="text-gray-600">
                Download official SDKs for Java, Python, PHP, Node.js, React and more programming languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white group-hover:shadow-lg transition-all">
                Download SDKs
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B2A3B] mb-4">Payment Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive suite of payment APIs designed for modern financial applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {product.icon}
                    </div>
                    <Badge className={`${getStatusColor(product.status)} border text-xs font-medium`}>
                      {product.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-[#1B2A3B] text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={product.detailsPath} className="flex items-center text-[#F37321] text-sm font-medium hover:text-[#e06314] transition-colors group-hover:underline">
                    <FileText className="w-4 h-4 mr-2" />
                    View Full Documentation
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Details - Enhanced */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1B2A3B] mb-4">Quick API Reference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get familiar with our APIs before diving into the full documentation
            </p>
          </div>

          {products.map((product) => (
            <Card key={`${product.id}-details`} className="border-0 shadow-lg bg-white">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                      {product.icon}
                    </div>
                    <div>
                      <CardTitle className="text-[#1B2A3B] text-2xl">{product.name}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">{product.description}</CardDescription>
                    </div>
                  </div>
                  <Link to={product.detailsPath}>
                    <Button variant="outline" className="text-[#F37321] border-[#F37321] hover:bg-[#F37321] hover:text-white transition-all">
                      <FileText className="w-4 h-4 mr-2" />
                      Full Documentation
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="overview" className="text-base">Overview & Features</TabsTrigger>
                    <TabsTrigger value="apis" className="text-base">API Endpoints</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <div className="space-y-6">
                      <p className="text-gray-600 text-lg leading-relaxed">{product.overview.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-[#1B2A3B] mb-4 text-lg">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {product.overview.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Link to={product.detailsPath} className="inline-flex items-center text-[#F37321] font-medium hover:text-[#e06314] transition-colors">
                          <Book className="w-4 h-4 mr-2" />
                          Read complete documentation
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="apis" className="mt-0">
                    <div className="grid gap-4">
                      {product.apis.map((api, index) => (
                        <div key={index} className="border rounded-lg p-6 hover:border-[#F37321]/50 hover:shadow-md transition-all">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-[#1B2A3B] text-lg">{api.name}</h4>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321] font-medium">
                                {api.endpoint.split(' ')[0]}
                              </Badge>
                              <Badge className={`text-xs ${getStatusColor(api.status)}`}>
                                {api.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{api.description}</p>
                          <code className="text-sm bg-gray-100 px-3 py-2 rounded-md text-[#1B2A3B] font-mono block">
                            {api.endpoint}
                          </code>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Code Example */}
        <Card className="mt-16 border-0 shadow-xl bg-gradient-to-r from-[#1B2A3B] to-gray-800">
          <CardHeader className="text-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white text-2xl">Example: Create Instant Payment</CardTitle>
                <CardDescription className="text-gray-300 mt-2">
                  Quick example showing how to create an instant payment using our REST API
                </CardDescription>
              </div>
              <Button variant="secondary" size="sm">
                <Code className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-[#1a1a1a] rounded-b-lg p-8 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="text-gray-400 mb-4"># Create an instant payment</div>
              <div className="space-y-1">
                <div><span className="text-[#F37321]">curl</span> <span className="text-yellow-400">-X POST</span> https://api.ethswitch.com/v1/payments/instant \</div>
                <div className="ml-4"><span className="text-yellow-400">-H</span> <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \</div>
                <div className="ml-4"><span className="text-yellow-400">-H</span> <span className="text-green-400">"Content-Type: application/json"</span> \</div>
                <div className="ml-4"><span className="text-yellow-400">-d</span> <span className="text-green-400">'{"{"}'</span></div>
                <div className="ml-8 space-y-1">
                  <div className="text-white">"amount": 1000.00,</div>
                  <div className="text-white">"currency": "ETB",</div>
                  <div className="text-white">"from_account": "acc_123",</div>
                  <div className="text-white">"to_account": "acc_456",</div>
                  <div className="text-white">"description": "Payment for services"</div>
                </div>
                <div><span className="text-green-400">{"}"}'</span></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
