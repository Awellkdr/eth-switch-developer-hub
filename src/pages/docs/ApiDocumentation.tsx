
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Copy, Play, AlertCircle, CheckCircle, Info, ArrowRight, Download, Users, Shield, Zap, Clock, Building, Globe, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const ApiDocumentation = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: <Info className="w-4 h-4" /> },
    { id: "integration", label: "Integration Roadmap", icon: <ArrowRight className="w-4 h-4" /> },
    { id: "process-flow", label: "Payment Process Flow", icon: <Shield className="w-4 h-4" /> },
    { id: "specifications", label: "Technical Specifications", icon: <Users className="w-4 h-4" /> },
    { id: "resources", label: "Developer Resources", icon: <Download className="w-4 h-4" /> },
    { id: "apis", label: "API Endpoints", icon: <Globe className="w-4 h-4" /> }
  ];

  const instantPaymentFeatures = [
    {
      title: "Real-time Settlement",
      description: "Sub-3 second settlement with immediate confirmation",
      icon: <Zap className="w-5 h-5" />,
      status: "Production Ready"
    },
    {
      title: "Peer-to-Peer Transfers",
      description: "Direct person-to-person instant payments",
      icon: <Users className="w-5 h-5" />,
      status: "Production Ready"
    },
    {
      title: "Merchant Payments",
      description: "Instant checkout and payment processing",
      icon: <Shield className="w-5 h-5" />,
      status: "Production Ready"
    },
    {
      title: "Bulk Transfers",
      description: "Process multiple instant payments simultaneously",
      icon: <Clock className="w-5 h-5" />,
      status: "Beta"
    }
  ];

  const bankTransferFeatures = [
    {
      title: "Domestic Transfers",
      description: "Inter-bank transfers within Ethiopia",
      icon: <Building className="w-5 h-5" />,
      status: "Production Ready"
    },
    {
      title: "International SWIFT",
      description: "Global transfers via SWIFT network",
      icon: <Globe className="w-5 h-5" />,
      status: "Production Ready"
    },
    {
      title: "Bulk Processing",
      description: "Process multiple transfers simultaneously",
      icon: <Clock className="w-5 h-5" />,
      status: "Production Ready"
    },
    {
      title: "Compliance & Security",
      description: "AML/KYC compliance with enterprise security",
      icon: <Shield className="w-5 h-5" />,
      status: "Production Ready"
    }
  ];

  const integrationSteps = [
    { step: 1, title: "Authentication Setup", description: "Configure API keys and authentication", status: "Required" },
    { step: 2, title: "Account Verification", description: "Verify source and destination accounts", status: "Required" },
    { step: 3, title: "Payment Implementation", description: "Implement core payment functionality", status: "Required" },
    { step: 4, title: "Webhooks Integration", description: "Set up real-time notifications", status: "Recommended" },
    { step: 5, title: "Advanced Features", description: "Add bulk transfers and SWIFT integration", status: "Optional" }
  ];

  const instantPaymentFlow = [
    { step: 1, action: "Payment Request", description: "Client initiates payment with amount and destination" },
    { step: 2, action: "Account Validation", description: "System validates source and destination accounts" },
    { step: 3, action: "Balance Check", description: "Verify sufficient funds in source account" },
    { step: 4, action: "Payment Processing", description: "Execute instant transfer between accounts" },
    { step: 5, action: "Settlement", description: "Complete settlement and update balances" },
    { step: 6, action: "Confirmation", description: "Send confirmation to both parties" }
  ];

  const bankTransferFlow = [
    { step: 1, action: "Transfer Request", description: "Client initiates bank transfer with beneficiary details" },
    { step: 2, action: "Compliance Check", description: "System performs AML/KYC validation" },
    { step: 3, action: "Bank Routing", description: "Determine optimal routing path between banks" },
    { step: 4, action: "SWIFT Processing", description: "Execute transfer via SWIFT network (if international)" },
    { step: 5, action: "Settlement", description: "Complete settlement between banking institutions" },
    { step: 6, action: "Confirmation", description: "Send transfer confirmation and tracking details" }
  ];

  const instantPaymentSpecs = [
    { tag: "00", field: "amount", type: "Decimal", length: "1-12", presence: "M", description: "Payment amount in ETB" },
    { tag: "01", field: "from_account", type: "String", length: "10-20", presence: "M", description: "Source account identifier" },
    { tag: "02", field: "to_account", type: "String", length: "10-20", presence: "M", description: "Destination account identifier" },
    { tag: "03", field: "description", type: "String", length: "1-140", presence: "O", description: "Payment description" },
    { tag: "04", field: "reference", type: "String", length: "1-35", presence: "O", description: "External reference ID" },
    { tag: "05", field: "callback_url", type: "URL", length: "1-255", presence: "O", description: "Webhook callback URL" }
  ];

  const bankTransferSpecs = [
    { tag: "00", field: "amount", type: "Decimal", length: "1-15", presence: "M", description: "Transfer amount" },
    { tag: "01", field: "currency", type: "String", length: "3", presence: "M", description: "ISO 4217 currency code" },
    { tag: "02", field: "from_bank", type: "String", length: "8-11", presence: "M", description: "Source bank SWIFT/BIC code" },
    { tag: "03", field: "to_bank", type: "String", length: "8-11", presence: "M", description: "Destination bank SWIFT/BIC code" },
    { tag: "04", field: "from_account", type: "String", length: "1-34", presence: "M", description: "Source account IBAN/number" },
    { tag: "05", field: "to_account", type: "String", length: "1-34", presence: "M", description: "Destination account IBAN/number" },
    { tag: "06", field: "beneficiary_name", type: "String", length: "1-140", presence: "M", description: "Beneficiary full name" },
    { tag: "07", field: "transfer_purpose", type: "String", length: "1-35", presence: "O", description: "Purpose code" },
    { tag: "08", field: "reference", type: "String", length: "1-35", presence: "O", description: "External reference" }
  ];

  const supportedBanks = [
    { name: "Commercial Bank of Ethiopia", code: "CBE", type: "Domestic", swift: "CBETETAA" },
    { name: "Dashen Bank", code: "DSH", type: "Domestic", swift: "DASHETAS" },
    { name: "Bank of Abyssinia", code: "BOA", type: "Domestic", swift: "ABYSETAA" },
    { name: "Awash Bank", code: "AWA", type: "Domestic", swift: "AWASHETAA" },
    { name: "United Bank", code: "UNI", type: "Domestic", swift: "UNTDETAA" },
    { name: "Nib International Bank", code: "NIB", type: "Domestic", swift: "NIBLETAA" }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/instant-payments",
      description: "Create instant payment",
      category: "Instant Payments"
    },
    {
      method: "GET",
      endpoint: "/api/v1/instant-payments/{id}",
      description: "Get payment status",
      category: "Instant Payments"
    },
    {
      method: "POST",
      endpoint: "/api/v1/bank-transfers",
      description: "Create bank transfer",
      category: "Bank Transfers"
    },
    {
      method: "GET",
      endpoint: "/api/v1/bank-transfers/{id}",
      description: "Get transfer status",
      category: "Bank Transfers"
    },
    {
      method: "POST",
      endpoint: "/api/v1/bulk-transfers",
      description: "Create bulk transfers",
      category: "Bulk Operations"
    }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-full mx-auto flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6">
            <Link to="/docs" className="inline-flex items-center text-[#F37321] hover:text-[#e06314] transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                    activeSection === item.id
                      ? "bg-[#F37321] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-8 py-8">
          {/* Header */}
          <div id="overview" className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                  ⚡
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-[#1B2A3B]">Payment APIs Documentation</h1>
                  <p className="text-lg text-gray-600">Comprehensive guide for instant payments and bank transfers</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Try API
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download SDK
                </Button>
              </div>
            </div>

            {/* API Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                      ⚡
                    </div>
                    <div>
                      <CardTitle className="text-[#1B2A3B]">Instant Payments API</CardTitle>
                      <div className="flex space-x-2 mt-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">v2.1</Badge>
                        <Badge variant="outline">Production Ready</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>Real-time payment processing with sub-3 second settlement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {instantPaymentFeatures.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="text-blue-500">{feature.icon}</div>
                          <Badge variant={feature.status === "Production Ready" ? "default" : "secondary"} className="text-xs">
                            {feature.status}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-sm text-[#1B2A3B] mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <CardTitle className="text-[#1B2A3B]">Bank Transfers API</CardTitle>
                      <div className="flex space-x-2 mt-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">v3.2</Badge>
                        <Badge variant="outline">SWIFT Certified</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>Secure inter-bank transfers with SWIFT integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {bankTransferFeatures.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="text-emerald-500">{feature.icon}</div>
                          <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                            {feature.status}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-sm text-[#1B2A3B] mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Integration Roadmap */}
          <div id="integration" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Integration Roadmap</h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">Follow this recommended sequence to implement payment APIs:</p>
                
                <div className="space-y-4">
                  {integrationSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1B2A3B]">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      <Badge variant={step.status === "Required" ? "default" : step.status === "Recommended" ? "secondary" : "outline"}>
                        {step.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Flow */}
          <div id="process-flow" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Payment Process Flow</h2>
            
            <Tabs defaultValue="instant" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="instant">Instant Payments</TabsTrigger>
                <TabsTrigger value="bank">Bank Transfers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="instant">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {instantPaymentFlow.map((flow, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                            {flow.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[#1B2A3B]">{flow.action}</h3>
                            <p className="text-sm text-gray-600">{flow.description}</p>
                          </div>
                          {index < instantPaymentFlow.length - 1 && (
                            <div className="w-px h-8 bg-gray-300 ml-4"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="bank">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {bankTransferFlow.map((flow, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                            {flow.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[#1B2A3B]">{flow.action}</h3>
                            <p className="text-sm text-gray-600">{flow.description}</p>
                          </div>
                          {index < bankTransferFlow.length - 1 && (
                            <div className="w-px h-8 bg-gray-300 ml-4"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Technical Specifications */}
          <div id="specifications" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Technical Specifications</h2>
            
            <Tabs defaultValue="instant-specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="instant-specs">Instant Payments</TabsTrigger>
                <TabsTrigger value="bank-specs">Bank Transfers</TabsTrigger>
                <TabsTrigger value="banks">Supported Banks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="instant-specs">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1B2A3B] mb-4">Instant Payment Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Tag</th>
                            <th className="text-left p-3 font-semibold">Field</th>
                            <th className="text-left p-3 font-semibold">Type</th>
                            <th className="text-left p-3 font-semibold">Length</th>
                            <th className="text-left p-3 font-semibold">Presence</th>
                            <th className="text-left p-3 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {instantPaymentSpecs.map((spec, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-3 font-mono text-sm">{spec.tag}</td>
                              <td className="p-3 font-mono text-sm">{spec.field}</td>
                              <td className="p-3">{spec.type}</td>
                              <td className="p-3">{spec.length}</td>
                              <td className="p-3">
                                <Badge variant={spec.presence === "M" ? "default" : "outline"} className="text-xs">
                                  {spec.presence === "M" ? "Mandatory" : "Optional"}
                                </Badge>
                              </td>
                              <td className="p-3 text-sm text-gray-600">{spec.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="bank-specs">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1B2A3B] mb-4">Bank Transfer Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Tag</th>
                            <th className="text-left p-3 font-semibold">Field</th>
                            <th className="text-left p-3 font-semibold">Type</th>
                            <th className="text-left p-3 font-semibold">Length</th>
                            <th className="text-left p-3 font-semibold">Presence</th>
                            <th className="text-left p-3 font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bankTransferSpecs.map((spec, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-3 font-mono text-sm">{spec.tag}</td>
                              <td className="p-3 font-mono text-sm">{spec.field}</td>
                              <td className="p-3">{spec.type}</td>
                              <td className="p-3">{spec.length}</td>
                              <td className="p-3">
                                <Badge variant={spec.presence === "M" ? "default" : "outline"} className="text-xs">
                                  {spec.presence === "M" ? "Mandatory" : "Optional"}
                                </Badge>
                              </td>
                              <td className="p-3 text-sm text-gray-600">{spec.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="banks">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1B2A3B] mb-4">Supported Banking Partners</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Bank Name</th>
                            <th className="text-left p-3 font-semibold">Code</th>
                            <th className="text-left p-3 font-semibold">SWIFT/BIC</th>
                            <th className="text-left p-3 font-semibold">Type</th>
                            <th className="text-left p-3 font-semibold">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {supportedBanks.map((bank, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-3 font-medium">{bank.name}</td>
                              <td className="p-3 font-mono text-sm">{bank.code}</td>
                              <td className="p-3 font-mono text-sm">{bank.swift}</td>
                              <td className="p-3">{bank.type}</td>
                              <td className="p-3">
                                <Badge variant="default" className="bg-green-100 text-green-800">
                                  Active
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Developer Resources */}
          <div id="resources" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Developer Resources</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">SDKs & Libraries</CardTitle>
                  <CardDescription>Production-ready integrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Node.js SDK
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Python Library
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      PHP Package
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Testing Tools</CardTitle>
                  <CardDescription>Sandbox and simulation tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Play className="w-4 h-4 mr-2" />
                      API Simulator
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Sandbox Environment
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Test Data Generator
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Documentation</CardTitle>
                  <CardDescription>Comprehensive guides and references</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      API Reference PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Info className="w-4 h-4 mr-2" />
                      Integration Guide
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Troubleshooting Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* API Endpoints */}
          <div id="apis" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">API Endpoints</h2>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant={endpoint.method === "POST" ? "default" : "secondary"}>
                          {endpoint.method}
                        </Badge>
                        <div>
                          <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{endpoint.endpoint}</code>
                          <p className="text-sm text-gray-600 mt-1">{endpoint.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{endpoint.category}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-emerald-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-[#1B2A3B] mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">Create your developer account and start integrating payments today.</p>
              <div className="flex justify-center space-x-4">
                <Button size="lg">
                  Create Project
                </Button>
                <Button variant="outline" size="lg">
                  View API Reference
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocumentation;
