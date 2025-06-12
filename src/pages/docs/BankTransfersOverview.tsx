
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Copy, Play, AlertCircle, CheckCircle, CreditCard, ArrowRight, Download, Building, Globe, Shield, Clock, Zap, DollarSign, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const BankTransfersOverview = () => {
  const features = [
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
    { step: 1, title: "Bank Registration", description: "Register with supported banking partners", status: "Required" },
    { step: 2, title: "Compliance Setup", description: "Configure AML/KYC compliance rules", status: "Required" },
    { step: 3, title: "Domestic Transfers", description: "Implement local bank transfers", status: "Required" },
    { step: 4, title: "SWIFT Integration", description: "Enable international transfers", status: "Optional" },
    { step: 5, title: "Bulk Operations", description: "Add batch processing capabilities", status: "Optional" }
  ];

  const processFlow = [
    { step: 1, action: "Transfer Request", description: "Client initiates bank transfer with beneficiary details" },
    { step: 2, action: "Compliance Check", description: "System performs AML/KYC validation" },
    { step: 3, action: "Bank Routing", description: "Determine optimal routing path between banks" },
    { step: 4, action: "SWIFT Processing", description: "Execute transfer via SWIFT network (if international)" },
    { step: 5, action: "Settlement", description: "Complete settlement between banking institutions" },
    { step: 6, action: "Confirmation", description: "Send transfer confirmation and tracking details" }
  ];

  const technicalSpecs = [
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
      endpoint: "/api/v1/bank-transfers",
      description: "Initiate a new bank transfer",
      status: "Live"
    },
    {
      method: "GET",
      endpoint: "/api/v1/bank-transfers/{'{id}'}",
      description: "Retrieve transfer status and details",
      status: "Live"
    },
    {
      method: "POST",
      endpoint: "/api/v1/bank-transfers/batch",
      description: "Process multiple transfers",
      status: "Live"
    },
    {
      method: "GET",
      endpoint: "/api/v1/banks",
      description: "List supported banks",
      status: "Live"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "2.5%",
      description: "Perfect for small businesses",
      features: ["Up to 100 transfers/month", "Domestic transfers only", "Basic compliance", "Email support"]
    },
    {
      name: "Professional",
      price: "1.8%",
      description: "Growing businesses",
      features: ["Up to 1,000 transfers/month", "Domestic + SWIFT", "Advanced compliance", "Priority support", "Bulk processing"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Large organizations",
      features: ["Unlimited transfers", "Full SWIFT network", "Custom compliance", "24/7 dedicated support", "Custom integrations"]
    }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/docs" className="inline-flex items-center text-[#F37321] hover:text-[#e06314] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Documentation
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#1B2A3B]">Bank Transfers API</h1>
                <p className="text-lg text-gray-600">Secure inter-bank transfers with SWIFT integration</p>
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
          <div className="flex space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">Production Ready</Badge>
            <Badge variant="outline">v3.2</Badge>
            <Badge variant="outline">SWIFT Certified</Badge>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="process">Process Flow</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  The Bank Transfers API facilitates secure inter-bank transfers across all major Ethiopian banks and 
                  international transfers via SWIFT network. Built with enterprise-grade security and compliance.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="text-emerald-500">{feature.icon}</div>
                        <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                          {feature.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Supported Banks */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Supported Banking Partners</CardTitle>
                <CardDescription>Major Ethiopian and international banking institutions</CardDescription>
              </CardHeader>
              <CardContent>
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

          {/* Integration Tab */}
          <TabsContent value="integration" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Integration Roadmap</CardTitle>
                <CardDescription>Follow this sequence to implement bank transfer capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {integrationSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1B2A3B]">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      <Badge variant={step.status === "Required" ? "default" : "outline"}>
                        {step.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* API Endpoints */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">API Endpoints</CardTitle>
                <CardDescription>Available endpoints for bank transfer operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={endpoint.method === "POST" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                          {endpoint.method}
                        </Badge>
                        <code className="text-sm font-mono">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-gray-600 mb-3">{endpoint.description}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default" className="bg-green-100 text-green-800 text-xs">
                          {endpoint.status}
                        </Badge>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Process Flow Tab */}
          <TabsContent value="process" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Transfer Process Flow</CardTitle>
                <CardDescription>Complete transfer lifecycle from initiation to settlement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {processFlow.map((flow, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                        {flow.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1B2A3B]">{flow.action}</h3>
                        <p className="text-sm text-gray-600">{flow.description}</p>
                      </div>
                      {index < processFlow.length - 1 && (
                        <div className="w-px h-12 bg-gray-300 ml-4"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent value="specifications" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Transfer Request Parameters</CardTitle>
                <CardDescription>Technical specifications for bank transfer requests</CardDescription>
              </CardHeader>
              <CardContent>
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
                      {technicalSpecs.map((spec, index) => (
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

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
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
                      SWIFT Gateway SDK
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Java Spring Library
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      .NET Core Package
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Compliance Tools</CardTitle>
                  <CardDescription>AML/KYC and regulatory tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      AML Screening Tool
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      KYC Validator
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Sanctions Checker
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Testing Environment</CardTitle>
                  <CardDescription>Sandbox and simulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Play className="w-4 h-4 mr-2" />
                      SWIFT Simulator
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="w-4 h-4 mr-2" />
                      Bank Network Sandbox
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="w-4 h-4 mr-2" />
                      International Gateway
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Pricing Plans</CardTitle>
                <CardDescription>Choose the right plan for your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {pricingTiers.map((tier, index) => (
                    <div key={index} className={`border rounded-lg p-6 ${index === 1 ? 'border-emerald-500 bg-emerald-50' : ''}`}>
                      {index === 1 && (
                        <Badge className="mb-4 bg-emerald-500 text-white">Most Popular</Badge>
                      )}
                      <h3 className="font-bold text-xl text-[#1B2A3B] mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{tier.price}</div>
                      <p className="text-gray-600 mb-4">{tier.description}</p>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                        {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Next Steps */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50 mt-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-4">Ready to Enable Bank Transfers?</h2>
            <p className="text-gray-600 mb-6">Connect with our banking network and start processing secure transfers.</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                Register with Banks
              </Button>
              <Button variant="outline" size="lg">
                View Compliance Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default BankTransfersOverview;
