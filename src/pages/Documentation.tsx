import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Book, Code, Zap, Shield, CreditCard, Smartphone, QrCode, Webhook } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const products = [
    {
      id: "instant-payments",
      name: "Instant Payments",
      description: "Real-time payment processing and transfers",
      icon: <Zap className="w-6 h-6" />,
      detailsPath: "/docs/instant-payments",
      overview: {
        title: "Instant Payments Overview",
        description: "Process real-time payments with immediate settlement across all supported banks and financial institutions in Ethiopia.",
        features: [
          "Real-time processing",
          "Immediate settlement", 
          "24/7 availability",
          "Multi-bank support",
          "Transaction tracking"
        ]
      },
      apis: [
        { name: "Create Payment", endpoint: "POST /v1/payments/instant", description: "Initiate an instant payment" },
        { name: "Payment Status", endpoint: "GET /v1/payments/{id}/status", description: "Check payment status" },
        { name: "Cancel Payment", endpoint: "POST /v1/payments/{id}/cancel", description: "Cancel pending payment" },
        { name: "Payment History", endpoint: "GET /v1/payments/history", description: "Retrieve payment history" }
      ]
    },
    {
      id: "bank-transfers",
      name: "Bank Transfers", 
      description: "Inter-bank transfer operations",
      icon: <CreditCard className="w-6 h-6" />,
      detailsPath: "/docs/bank-transfers",
      overview: {
        title: "Bank Transfers Overview",
        description: "Facilitate secure inter-bank transfers with support for all major Ethiopian banks and international transfer protocols.",
        features: [
          "Inter-bank transfers",
          "SWIFT integration",
          "Batch processing",
          "Transaction limits",
          "Compliance checks"
        ]
      },
      apis: [
        { name: "Create Transfer", endpoint: "POST /v1/transfers/bank", description: "Initiate bank transfer" },
        { name: "Transfer Status", endpoint: "GET /v1/transfers/{id}", description: "Get transfer details" },
        { name: "Batch Transfer", endpoint: "POST /v1/transfers/batch", description: "Process multiple transfers" },
        { name: "Bank Directory", endpoint: "GET /v1/banks", description: "List supported banks" }
      ]
    },
    {
      id: "mobile-wallets",
      name: "Mobile Wallets",
      description: "Mobile wallet integrations and transfers",
      icon: <Smartphone className="w-6 h-6" />,
      detailsPath: "/docs/mobile-wallets",
      overview: {
        title: "Mobile Wallets Overview",
        description: "Connect with popular mobile wallet providers in Ethiopia including Telebirr, M-Birr, and HelloCash for seamless mobile payments.",
        features: [
          "Multi-wallet support",
          "USSD integration",
          "Mobile notifications",
          "Offline capabilities",
          "Balance inquiries"
        ]
      },
      apis: [
        { name: "Wallet Payment", endpoint: "POST /v1/wallets/payment", description: "Process wallet payment" },
        { name: "Wallet Balance", endpoint: "GET /v1/wallets/balance", description: "Check wallet balance" },
        { name: "Wallet Transfer", endpoint: "POST /v1/wallets/transfer", description: "Transfer between wallets" },
        { name: "Wallet Providers", endpoint: "GET /v1/wallets/providers", description: "List wallet providers" }
      ]
    },
    {
      id: "qr-payments",
      name: "QR Code Payments",
      description: "QR-based payment solutions",
      icon: <QrCode className="w-6 h-6" />,
      detailsPath: "/docs/qr-payments",
      overview: {
        title: "QR Code Payments Overview",
        description: "Enable quick and secure QR code-based payments for merchants and customers with EMVCo compliant QR standards.",
        features: [
          "EMVCo compliance",
          "Dynamic QR codes",
          "Merchant integration",
          "Customer apps",
          "Receipt generation"
        ]
      },
      apis: [
        { name: "Generate QR", endpoint: "POST /v1/qr/generate", description: "Generate payment QR code" },
        { name: "Process QR Payment", endpoint: "POST /v1/qr/payment", description: "Process QR payment" },
        { name: "QR Status", endpoint: "GET /v1/qr/{id}/status", description: "Check QR payment status" },
        { name: "Merchant QR", endpoint: "POST /v1/qr/merchant", description: "Create merchant QR" }
      ]
    },
    {
      id: "request-to-pay",
      name: "Request to Pay",
      description: "Payment request and collection APIs",
      icon: <Book className="w-6 h-6" />,
      detailsPath: "/docs/request-to-pay",
      overview: {
        title: "Request to Pay Overview",
        description: "Send payment requests to customers and track collection status with automated notifications and follow-ups.",
        features: [
          "Payment requests",
          "Collection tracking",
          "Automated reminders",
          "Multi-channel delivery",
          "Customizable templates"
        ]
      },
      apis: [
        { name: "Create Request", endpoint: "POST /v1/requests/payment", description: "Send payment request" },
        { name: "Request Status", endpoint: "GET /v1/requests/{id}", description: "Check request status" },
        { name: "Cancel Request", endpoint: "DELETE /v1/requests/{id}", description: "Cancel payment request" },
        { name: "Request History", endpoint: "GET /v1/requests/history", description: "Get request history" }
      ]
    },
    {
      id: "webhooks",
      name: "Webhooks & Events",
      description: "Real-time event notifications",
      icon: <Webhook className="w-6 h-6" />,
      detailsPath: "/docs/webhooks",
      overview: {
        title: "Webhooks Overview",
        description: "Receive real-time notifications about payment events, transaction updates, and system status changes.",
        features: [
          "Real-time notifications",
          "Event filtering",
          "Retry mechanisms",
          "Signature verification",
          "Event history"
        ]
      },
      apis: [
        { name: "Create Webhook", endpoint: "POST /v1/webhooks", description: "Register webhook endpoint" },
        { name: "List Webhooks", endpoint: "GET /v1/webhooks", description: "Get webhook configurations" },
        { name: "Update Webhook", endpoint: "PUT /v1/webhooks/{id}", description: "Update webhook settings" },
        { name: "Test Webhook", endpoint: "POST /v1/webhooks/{id}/test", description: "Test webhook endpoint" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1B2A3B] mb-4">API Documentation</h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive guides and API reference for all ETH Switch payment products and services
          </p>
          
          <div className="flex space-x-4">
            <Button className="bg-[#F37321] hover:bg-[#e06314] text-white">Get API Keys</Button>
            <Button variant="outline" className="text-[#1B2A3B] border-[#1B2A3B] hover:bg-[#1B2A3B]/10">Download SDKs</Button>
          </div>
        </div>

        {/* Quick access cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-[#1B2A3B]/5 to-[#1B2A3B]/10 border-[#1B2A3B]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1B2A3B]">
                <span className="text-2xl mr-2">🚀</span>
                Quick Start
              </CardTitle>
              <CardDescription>
                Get up and running in 5 minutes with our step-by-step guide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">Start Building</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#F37321]/5 to-[#F37321]/10 border-[#F37321]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1B2A3B]">
                <span className="text-2xl mr-2">🧪</span>
                API Playground
              </CardTitle>
              <CardDescription>
                Test our APIs interactively with live examples and responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">Try APIs</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1B2A3B]/5 to-[#F37321]/10 border-[#1B2A3B]/20">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1B2A3B]">
                <span className="text-2xl mr-2">📚</span>
                SDKs & Libraries
              </CardTitle>
              <CardDescription>
                Download SDKs for Java, Python, PHP, Node.js and more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">Download SDKs</Button>
            </CardContent>
          </Card>
        </div>

        {/* Products grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Payment Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#1B2A3B]">
                    <div className="mr-3 text-[#F37321]">{product.icon}</div>
                    {product.name}
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={product.detailsPath} className="flex items-center text-[#F37321] text-sm font-medium hover:underline">
                    View Full Documentation
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product details - Quick overview */}
        <div className="space-y-8">
          {products.map((product) => (
            <Card key={`${product.id}-details`} className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 text-[#F37321]">{product.icon}</div>
                    <div>
                      <CardTitle className="text-[#1B2A3B]">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </div>
                  </div>
                  <Link to={product.detailsPath}>
                    <Button variant="outline" size="sm" className="text-[#F37321] border-[#F37321] hover:bg-[#F37321]/10">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Quick Overview</TabsTrigger>
                    <TabsTrigger value="apis">APIs</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-4">
                      <p className="text-gray-600">{product.overview.description}</p>
                      
                      <div>
                        <h4 className="font-medium text-[#1B2A3B] mb-3">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {product.overview.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-[#F37321] rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link to={product.detailsPath} className="inline-flex items-center text-[#F37321] text-sm font-medium hover:underline">
                        Read full documentation
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="apis" className="mt-6">
                    <div className="space-y-4">
                      {product.apis.map((api, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:border-[#F37321] transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-[#1B2A3B]">{api.name}</h4>
                            <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321]">
                              {api.endpoint.split(' ')[0]}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{api.description}</p>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-[#1B2A3B]">
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

        {/* Code example section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-[#1B2A3B]">Example: Create Instant Payment</CardTitle>
            <CardDescription>
              Here's a quick example of how to create an instant payment using our REST API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-[#1B2A3B] rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="text-gray-400 mb-2"># Make a POST request to create an instant payment</div>
              <div className="text-[#F37321]">curl</div> <span className="text-yellow-400">-X POST</span> https://api.ethswitch.com/v1/payments/instant \<br/>
              <span className="ml-4 text-yellow-400">-H</span> <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \<br/>
              <span className="ml-4 text-yellow-400">-H</span> <span className="text-green-400">"Content-Type: application/json"</span> \<br/>
              <span className="ml-4 text-yellow-400">-d</span> <span className="text-green-400">'{"{"}'</span><br/>
              <span className="ml-8 text-white">"amount": 1000.00,</span><br/>
              <span className="ml-8 text-white">"currency": "ETB",</span><br/>
              <span className="ml-8 text-white">"from_account": "acc_123",</span><br/>
              <span className="ml-8 text-white">"to_account": "acc_456",</span><br/>
              <span className="ml-8 text-white">"description": "Payment for services"</span><br/>
              <span className="text-green-400">{"}"}'</span>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
