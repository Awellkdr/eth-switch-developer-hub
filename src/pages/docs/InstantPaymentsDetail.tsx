
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Copy, Play, AlertCircle, CheckCircle, Info, ArrowRight, Download, Users, Shield, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const InstantPaymentsDetail = () => {
  const features = [
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

  const integrationSteps = [
    { step: 1, title: "Authentication Setup", description: "Configure API keys and authentication", status: "Required" },
    { step: 2, title: "Account Verification", description: "Verify source and destination accounts", status: "Required" },
    { step: 3, title: "Basic Instant Payments", description: "Implement core payment functionality", status: "Required" },
    { step: 4, title: "Webhooks Integration", description: "Set up real-time notifications", status: "Recommended" },
    { step: 5, title: "Advanced Features", description: "Add bulk transfers and scheduling", status: "Optional" }
  ];

  const processFlow = [
    { step: 1, action: "Payment Request", description: "Client initiates payment with amount and destination" },
    { step: 2, action: "Account Validation", description: "System validates source and destination accounts" },
    { step: 3, action: "Balance Check", description: "Verify sufficient funds in source account" },
    { step: 4, action: "Payment Processing", description: "Execute instant transfer between accounts" },
    { step: 5, action: "Settlement", description: "Complete settlement and update balances" },
    { step: 6, action: "Confirmation", description: "Send confirmation to both parties" }
  ];

  const technicalSpecs = [
    { tag: "00", field: "amount", type: "Decimal", length: "1-12", presence: "M", description: "Payment amount in ETB" },
    { tag: "01", field: "from_account", type: "String", length: "10-20", presence: "M", description: "Source account identifier" },
    { tag: "02", field: "to_account", type: "String", length: "10-20", presence: "M", description: "Destination account identifier" },
    { tag: "03", field: "description", type: "String", length: "1-140", presence: "O", description: "Payment description" },
    { tag: "04", field: "reference", type: "String", length: "1-35", presence: "O", description: "External reference ID" },
    { tag: "05", field: "callback_url", type: "URL", length: "1-255", presence: "O", description: "Webhook callback URL" }
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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                ⚡
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#1B2A3B]">Instant Payments API</h1>
                <p className="text-lg text-gray-600">Real-time payment processing with immediate settlement</p>
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
            <Badge variant="outline">v2.1</Badge>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <a href="#overview" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Info className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Overview</span>
              </a>
              <a href="#integration" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-4 h-4 text-green-500" />
                <span className="font-medium">Integration Guide</span>
              </a>
              <a href="#specifications" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="font-medium">Technical Specs</span>
              </a>
              <a href="#resources" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4 text-orange-500" />
                <span className="font-medium">Resources</span>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Overview Section */}
        <div id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Overview</h2>
          
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                The Instant Payments API enables real-time payment processing with settlement completed within 3 seconds. 
                Perfect for time-sensitive transactions and applications requiring immediate confirmation.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="text-blue-500">{feature.icon}</div>
                      <Badge variant={feature.status === "Production Ready" ? "default" : "secondary"} className="text-xs">
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
        </div>

        {/* Integration Roadmap */}
        <div id="integration" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Integration Roadmap</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">Follow this recommended sequence to implement instant payments:</p>
              
              <div className="space-y-4">
                {integrationSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
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
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Payment Process Flow</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                {processFlow.map((flow, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                      {flow.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B2A3B]">{flow.action}</h3>
                      <p className="text-sm text-gray-600">{flow.description}</p>
                    </div>
                    {index < processFlow.length - 1 && (
                      <div className="w-px h-8 bg-gray-300 ml-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div id="specifications" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Technical Specifications</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-[#1B2A3B] mb-4">Request Parameters</h3>
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
        </div>

        {/* Developer Resources */}
        <div id="resources" className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B2A3B] mb-6">Developer Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Sample Applications</CardTitle>
                <CardDescription>Ready-to-use code examples</CardDescription>
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

        {/* Next Steps */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1B2A3B] mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Create your developer account and start integrating instant payments today.</p>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default InstantPaymentsDetail;
