
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, Clock, Shield, Globe, CheckCircle, AlertCircle, 
  Code, Download, Book, Settings, ArrowRight, PlayCircle,
  MessageSquare, FileText, Smartphone, CreditCard, Building,
  Users, TrendingUp, Lock, Wifi, Database
} from "lucide-react";

const InstantPaymentsOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B2A3B] to-[#2A3F56] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Zap className="w-12 h-12 text-[#F37321] mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Instant Payments API</h1>
              <p className="text-xl text-gray-300">Real-time payment processing with immediate settlement</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-[#F37321] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Sub-2 Second Processing</h3>
              <p className="text-gray-300">Lightning-fast payment processing with immediate confirmation</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-[#F37321] mb-3" />
              <h3 className="text-lg font-semibold mb-2">Bank-Grade Security</h3>
              <p className="text-gray-300">Advanced encryption and fraud detection systems</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Globe className="w-8 h-8 text-[#F37321] mb-3" />
              <h3 className="text-lg font-semibold mb-2">15+ Banks Supported</h3>
              <p className="text-gray-300">Comprehensive coverage across Ethiopian financial institutions</p>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-8">
            <Button size="lg" className="bg-[#F37321] hover:bg-[#e06314] text-white">
              <PlayCircle className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Code className="w-5 h-5 mr-2" />
              View API Reference
            </Button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="process-flow">Process Flow</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            {/* What is Instant Payments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1B2A3B] flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-[#F37321]" />
                  What is Instant Payments?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-lg">
                  Instant Payments is ETH Switch's flagship real-time payment processing solution that enables immediate money transfers between accounts across all major Ethiopian banks and financial institutions. Built on modern payment infrastructure, it provides 24/7 availability with instant settlement.
                </p>
                <p className="text-gray-600">
                  Our system processes payments in milliseconds, providing immediate confirmation to both sender and recipient while maintaining the highest security standards and regulatory compliance with the National Bank of Ethiopia (NBE).
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Core Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Real-time Processing</div>
                        <div className="text-sm text-gray-600">Instant payment processing with immediate settlement</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Multi-bank Support</div>
                        <div className="text-sm text-gray-600">Seamless integration with all major Ethiopian banks</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">24/7 Availability</div>
                        <div className="text-sm text-gray-600">Round-the-clock service with 99.9% uptime guarantee</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Advanced Security</div>
                        <div className="text-sm text-gray-600">AI-powered fraud detection and prevention</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Technical Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">RESTful API</div>
                        <div className="text-sm text-gray-600">Simple and intuitive API integration</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Webhooks & Events</div>
                        <div className="text-sm text-gray-600">Real-time event notifications and callbacks</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Multiple SDKs</div>
                        <div className="text-sm text-gray-600">Support for major programming languages</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Sandbox Testing</div>
                        <div className="text-sm text-gray-600">Complete testing environment for development</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Popular Use Cases</CardTitle>
                <CardDescription>See how businesses leverage Instant Payments across different industries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Smartphone className="w-12 h-12 text-[#F37321] mx-auto mb-3" />
                    <h4 className="font-medium text-[#1B2A3B] mb-2">Mobile Apps</h4>
                    <p className="text-sm text-gray-600">In-app payments and wallet top-ups</p>
                  </div>
                  <div className="text-center">
                    <CreditCard className="w-12 h-12 text-[#F37321] mx-auto mb-3" />
                    <h4 className="font-medium text-[#1B2A3B] mb-2">E-commerce</h4>
                    <p className="text-sm text-gray-600">Instant checkout experiences</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-12 h-12 text-[#F37321] mx-auto mb-3" />
                    <h4 className="font-medium text-[#1B2A3B] mb-2">Business Payments</h4>
                    <p className="text-sm text-gray-600">B2B transfers and supplier payments</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-[#F37321] mx-auto mb-3" />
                    <h4 className="font-medium text-[#1B2A3B] mb-2">P2P Transfers</h4>
                    <p className="text-sm text-gray-600">Person-to-person money transfers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="text-center pt-6">
                  <div className="text-3xl font-bold text-[#F37321]">&lt;2s</div>
                  <div className="text-sm text-gray-600">Average processing time</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <div className="text-3xl font-bold text-[#F37321]">99.9%</div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <div className="text-3xl font-bold text-[#F37321]">24/7</div>
                  <div className="text-sm text-gray-600">Service availability</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center pt-6">
                  <div className="text-3xl font-bold text-[#F37321]">15+</div>
                  <div className="text-sm text-gray-600">Supported banks</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="space-y-8">
            {/* Integration Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1B2A3B]">Integration Roadmap</CardTitle>
                <CardDescription>Follow this step-by-step guide to integrate Instant Payments into your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">Account Setup & API Keys</h3>
                      <p className="text-gray-600 mb-3">Create your developer account and obtain API credentials</p>
                      <Button size="sm" className="bg-[#F37321] hover:bg-[#e06314] text-white">
                        <Settings className="w-4 h-4 mr-2" />
                        Get API Keys
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">Install SDK</h3>
                      <p className="text-gray-600 mb-3">Choose your preferred programming language and install our SDK</p>
                      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-3">
                        npm install @ethswitch/instant-payments
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">PHP</Badge>
                        <Badge variant="outline">Java</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">Authentication Setup</h3>
                      <p className="text-gray-600 mb-3">Configure API authentication and security headers</p>
                      <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                        Authorization: Bearer YOUR_API_KEY
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">Test Integration</h3>
                      <p className="text-gray-600 mb-3">Use our sandbox environment to test your integration</p>
                      <Button size="sm" variant="outline" className="text-[#1B2A3B] border-[#1B2A3B]">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Try Sandbox
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B2A3B] mb-2">Go Live</h3>
                      <p className="text-gray-600 mb-3">Switch to production environment and start processing real payments</p>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Go Live
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start Code */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Quick Start Example</CardTitle>
                <CardDescription>Send your first instant payment with just a few lines of code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`const ethswitch = require('@ethswitch/instant-payments');

// Initialize client
const client = new ethswitch.InstantPayments({
  apiKey: 'your_api_key',
  environment: 'sandbox' // or 'production'
});

// Send payment
const payment = await client.sendPayment({
  amount: 1000.00,
  currency: 'ETB',
  recipientAccount: '1234567890',
  recipientBank: 'CBE',
  description: 'Payment for services'
});

console.log('Payment ID:', payment.id);
console.log('Status:', payment.status);`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process-flow" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1B2A3B]">Payment Process Flow</CardTitle>
                <CardDescription>Understand how instant payments work from initiation to settlement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">1</div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1B2A3B]">Payment Initiation</h4>
                      <p className="text-gray-600">Client sends payment request via API with recipient details and amount</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">2</div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1B2A3B]">Validation & Authentication</h4>
                      <p className="text-gray-600">System validates account details, available balance, and performs security checks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">3</div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1B2A3B]">Inter-bank Processing</h4>
                      <p className="text-gray-600">Payment routed through secure inter-bank network with real-time messaging</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">4</div>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1B2A3B]">Instant Settlement</h4>
                      <p className="text-gray-600">Immediate settlement with real-time confirmation sent to both parties</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Error Handling */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Error Handling & Status Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status Code</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Action Required</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell><Badge className="bg-green-100 text-green-800">200</Badge></TableCell>
                      <TableCell>Payment Successful</TableCell>
                      <TableCell>No action needed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge className="bg-yellow-100 text-yellow-800">202</Badge></TableCell>
                      <TableCell>Payment Pending</TableCell>
                      <TableCell>Monitor status via webhook</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge className="bg-red-100 text-red-800">400</Badge></TableCell>
                      <TableCell>Invalid Request</TableCell>
                      <TableCell>Check request parameters</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge className="bg-red-100 text-red-800">401</Badge></TableCell>
                      <TableCell>Unauthorized</TableCell>
                      <TableCell>Verify API credentials</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge className="bg-red-100 text-red-800">403</Badge></TableCell>
                      <TableCell>Insufficient Funds</TableCell>
                      <TableCell>Request funding from sender</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="space-y-8">
            {/* API Endpoints */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1B2A3B]">API Endpoints</CardTitle>
                <CardDescription>Complete reference for all available endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                      <code className="text-sm font-mono">/api/v1/payments/instant</code>
                    </div>
                    <p className="text-gray-600 mb-3">Initiate an instant payment transaction</p>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-green-100 text-green-800">GET</Badge>
                      <code className="text-sm font-mono">/api/v1/payments/{id}</code>
                    </div>
                    <p className="text-gray-600 mb-3">Retrieve payment status and details</p>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-green-100 text-green-800">GET</Badge>
                      <code className="text-sm font-mono">/api/v1/banks</code>
                    </div>
                    <p className="text-gray-600 mb-3">List all supported banks and their codes</p>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Request/Response Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Request Schema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "amount": 1000.00,
  "currency": "ETB",
  "recipientAccount": "1234567890",
  "recipientBank": "CBE",
  "recipientName": "John Doe",
  "description": "Payment description",
  "reference": "REF123456",
  "notificationUrl": "https://your-app.com/webhook"
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Response Schema */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Response Schema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`{
  "id": "pay_1234567890",
  "status": "completed",
  "amount": 1000.00,
  "currency": "ETB",
  "fee": 3.50,
  "reference": "REF123456",
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:30:02Z",
  "recipient": {
    "account": "1234567890",
    "bank": "CBE",
    "name": "John Doe"
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            {/* Developer Tools */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Developer Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-[#F37321]" />
                    <div>
                      <div className="font-medium text-[#1B2A3B]">API Testing Console</div>
                      <div className="text-sm text-gray-600">Interactive API explorer and testing tool</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Download className="w-5 h-5 text-[#F37321]" />
                    <div>
                      <div className="font-medium text-[#1B2A3B]">SDK Downloads</div>
                      <div className="text-sm text-gray-600">Ready-to-use libraries for all major languages</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PlayCircle className="w-5 h-5 text-[#F37321]" />
                    <div>
                      <div className="font-medium text-[#1B2A3B]">Sandbox Environment</div>
                      <div className="text-sm text-gray-600">Full-featured testing environment</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Documentation & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Book className="w-5 h-5 text-[#F37321]" />
                    <div>
                      <div className="font-medium text-[#1B2A3B]">Integration Guides</div>
                      <div className="text-sm text-gray-600">Step-by-step tutorials and best practices</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-[#F37321]" />
                    <div>
                      <div className="font-medium text-[#1B2A3B]">Developer Support</div>
                      <div className="text-sm text-gray-600">24/7 technical support and community forum</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-[#F37321]" />
                    <div>
                      <div className="font-medium text-[#1B2A3B]">Sample Applications</div>
                      <div className="text-sm text-gray-600">Ready-to-run example implementations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sample Code Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Code Examples</CardTitle>
                <CardDescription>Ready-to-use code snippets for common scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="nodejs" className="w-full">
                  <TabsList>
                    <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="php">PHP</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="nodejs">
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`const payment = await client.sendPayment({
  amount: 500.00,
  currency: 'ETB',
  recipientAccount: '9876543210',
  recipientBank: 'AWINETB'
});`}
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="python">
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`payment = client.send_payment(
    amount=500.00,
    currency='ETB',
    recipient_account='9876543210',
    recipient_bank='AWINETB'
)`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1B2A3B]">Pricing Structure</CardTitle>
                <CardDescription>Simple, transparent pricing with no hidden fees</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Monthly Volume</TableHead>
                      <TableHead>Rate per Transaction</TableHead>
                      <TableHead>Settlement Time</TableHead>
                      <TableHead>Support Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>0 - 1,000</TableCell>
                      <TableCell>3.5 ETB</TableCell>
                      <TableCell>Instant</TableCell>
                      <TableCell>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1,001 - 10,000</TableCell>
                      <TableCell>3.0 ETB</TableCell>
                      <TableCell>Instant</TableCell>
                      <TableCell>Priority</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10,001 - 50,000</TableCell>
                      <TableCell>2.5 ETB</TableCell>
                      <TableCell>Instant</TableCell>
                      <TableCell>Premium</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>50,001+</TableCell>
                      <TableCell>Custom</TableCell>
                      <TableCell>Instant</TableCell>
                      <TableCell>Enterprise</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Additional Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Included Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Real-time processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>24/7 monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fraud protection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>API documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Enterprise Add-ons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-[#F37321]" />
                      <span>Custom rate negotiation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-[#F37321]" />
                      <span>Dedicated security review</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4 text-[#F37321]" />
                      <span>Priority network access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Database className="w-4 h-4 text-[#F37321]" />
                      <span>Extended data retention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Get Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" className="w-full text-[#1B2A3B] border-[#1B2A3B]">
                      Schedule Demo
                    </Button>
                    <Button variant="ghost" className="w-full text-[#1B2A3B]">
                      Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstantPaymentsOverview;
