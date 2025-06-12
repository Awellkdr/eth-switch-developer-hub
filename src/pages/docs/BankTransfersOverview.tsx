
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Copy, Play, AlertCircle, CheckCircle, CreditCard, ArrowRight, Download, Building, Globe, Shield, Clock, Zap, DollarSign, Users, BarChart3, Code, FileText, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const BankTransfersOverview = () => {
  const heroStats = [
    { label: "Processing Speed", value: "< 5 mins", icon: <Clock className="w-5 h-5" /> },
    { label: "Success Rate", value: "99.8%", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Daily Volume", value: "$50M+", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Bank Partners", value: "25+", icon: <Building className="w-5 h-5" /> }
  ];

  const features = [
    {
      title: "Domestic Transfers",
      description: "Inter-bank transfers within Ethiopia",
      icon: <Building className="w-5 h-5" />,
      status: "Production Ready",
      progress: 100
    },
    {
      title: "International SWIFT",
      description: "Global transfers via SWIFT network",
      icon: <Globe className="w-5 h-5" />,
      status: "Production Ready",
      progress: 100
    },
    {
      title: "Bulk Processing",
      description: "Process multiple transfers simultaneously",
      icon: <Clock className="w-5 h-5" />,
      status: "Production Ready",
      progress: 100
    },
    {
      title: "Compliance & Security",
      description: "AML/KYC compliance with enterprise security",
      icon: <Shield className="w-5 h-5" />,
      status: "Production Ready",
      progress: 100
    }
  ];

  const integrationSteps = [
    { step: 1, title: "Bank Registration", description: "Register with supported banking partners", status: "Required", progress: 100 },
    { step: 2, title: "Compliance Setup", description: "Configure AML/KYC compliance rules", status: "Required", progress: 100 },
    { step: 3, title: "Domestic Transfers", description: "Implement local bank transfers", status: "Required", progress: 100 },
    { step: 4, title: "SWIFT Integration", description: "Enable international transfers", status: "Optional", progress: 85 },
    { step: 5, title: "Bulk Operations", description: "Add batch processing capabilities", status: "Optional", progress: 70 }
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
      endpoint: "/api/v1/bank-transfers/{transferId}",
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
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1B2A3B] via-[#1B2A3B]/90 to-[#F37321]">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link to="/docs" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Documentation
              </Link>
            </div>

            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              🏦 SWIFT Certified & Production Ready
            </Badge>
            
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h1 className="text-5xl font-bold text-white">Bank Transfers API</h1>
                <p className="text-xl text-blue-100">Secure inter-bank transfers with SWIFT integration</p>
              </div>
            </div>
            
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Enable secure bank-to-bank transfers across Ethiopia and internationally. 
              Built with enterprise-grade security, SWIFT certification, and comprehensive compliance features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-[#F37321] hover:bg-[#e06314] text-white">
                <Play className="w-4 h-4 mr-2" />
                Try API
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Download className="w-4 h-4 mr-2" />
                Download SDK
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FileText className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </div>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="text-emerald-300">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Badges */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">Production Ready</Badge>
          <Badge variant="outline">v3.2</Badge>
          <Badge variant="outline">SWIFT Certified</Badge>
          <Badge variant="outline">ISO 20022 Compliant</Badge>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
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
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="text-emerald-500">{feature.icon}</div>
                        <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                          {feature.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Implementation</span>
                          <span>{feature.progress}%</span>
                        </div>
                        <Progress value={feature.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process Flow Visualization */}
                <h3 className="text-xl font-semibold text-[#1B2A3B] mb-4">Transfer Process Flow</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {processFlow.map((flow, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mx-auto mb-2">
                        {flow.step}
                      </div>
                      <h4 className="font-medium text-sm text-[#1B2A3B] mb-1">{flow.action}</h4>
                      <p className="text-xs text-gray-600">{flow.description}</p>
                      {index < processFlow.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400 mx-auto mt-2 hidden lg:block" />
                      )}
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
                        <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Progress</span>
                            <span>{step.progress}%</span>
                          </div>
                          <Progress value={step.progress} className="h-2" />
                        </div>
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
                        <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{endpoint.endpoint}</code>
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

          {/* Code Examples Tab */}
          <TabsContent value="examples" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Implementation Examples</CardTitle>
                <CardDescription>Ready-to-use code examples for bank transfer integration</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="initiate" className="space-y-6">
                  <TabsList>
                    <TabsTrigger value="initiate">Initiate Transfer</TabsTrigger>
                    <TabsTrigger value="status">Check Status</TabsTrigger>
                    <TabsTrigger value="bulk">Bulk Processing</TabsTrigger>
                  </TabsList>

                  <TabsContent value="initiate">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">POST /api/v1/bank-transfers</h4>
                        <Button size="sm" variant="outline" onClick={() => copyCode('// Initiate bank transfer code')}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                        <pre>{`{
  "amount": 1500.00,
  "currency": "ETB",
  "from_bank": "CBETETAA",
  "to_bank": "DASHETAS",
  "from_account": "1000123456789",
  "to_account": "2000987654321",
  "beneficiary_name": "John Doe",
  "transfer_purpose": "SAL",
  "reference": "INV-2024-001"
}`}</pre>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="status">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">GET /api/v1/bank-transfers/[transferId]</h4>
                        <Button size="sm" variant="outline" onClick={() => copyCode('// Status check code')}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                        <pre>{`{
  "id": "bt_1234567890",
  "status": "completed",
  "amount": 1500.00,
  "currency": "ETB",
  "created_at": "2024-01-15T10:30:00Z",
  "completed_at": "2024-01-15T10:33:45Z",
  "swift_reference": "FT24015123456789"
}`}</pre>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="bulk">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">POST /api/v1/bank-transfers/batch</h4>
                        <Button size="sm" variant="outline" onClick={() => copyCode('// Bulk processing code')}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                        <pre>{`{
  "batch_id": "batch_20240115_001",
  "transfers": [
    {
      "amount": 1500.00,
      "currency": "ETB",
      "from_bank": "CBETETAA",
      "to_bank": "DASHETAS",
      "from_account": "1000123456789",
      "to_account": "2000987654321",
      "beneficiary_name": "John Doe"
    }
  ]
}`}</pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
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
