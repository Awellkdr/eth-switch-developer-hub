
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Zap, Clock, Shield, Globe, CheckCircle, AlertCircle } from "lucide-react";

const InstantPaymentsOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-[#F37321] mr-3" />
            <h1 className="text-3xl font-bold text-[#1B2A3B]">Instant Payments</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Process real-time payments with immediate settlement across all supported banks and financial institutions in Ethiopia.
          </p>
          
          <div className="flex space-x-4">
            <Button className="bg-[#F37321] hover:bg-[#e06314] text-white">Get Started</Button>
            <Button variant="outline" className="text-[#1B2A3B] border-[#1B2A3B] hover:bg-[#1B2A3B]/10">View API Reference</Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">What is Instant Payments?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Instant Payments is ETH Switch's flagship real-time payment processing solution that enables immediate money transfers between accounts across all major Ethiopian banks and financial institutions. Built on modern payment infrastructure, it provides 24/7 availability with instant settlement.
                    </p>
                    <p className="text-gray-600">
                      Our system processes payments in milliseconds, providing immediate confirmation to both sender and recipient while maintaining the highest security standards and regulatory compliance.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <Clock className="w-6 h-6 text-[#F37321] mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Real-time Processing</h4>
                          <p className="text-sm text-gray-600">Payments processed in under 2 seconds</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-[#F37321] mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Secure & Compliant</h4>
                          <p className="text-sm text-gray-600">Bank-level security with NBE compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="w-6 h-6 text-[#F37321] mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Wide Coverage</h4>
                          <p className="text-sm text-gray-600">All major Ethiopian banks supported</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#F37321] mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">99.9% Uptime</h4>
                          <p className="text-sm text-gray-600">Reliable service with minimal downtime</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">How It Works</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">1</div>
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Initiate Payment</h4>
                          <p className="text-sm text-gray-600">Send payment request via API with recipient details</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">2</div>
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Verification</h4>
                          <p className="text-sm text-gray-600">System validates account details and available balance</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">3</div>
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Processing</h4>
                          <p className="text-sm text-gray-600">Payment processed through secure inter-bank network</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#F37321] text-white rounded-full flex items-center justify-center font-semibold">4</div>
                        <div>
                          <h4 className="font-semibold text-[#1B2A3B]">Settlement</h4>
                          <p className="text-sm text-gray-600">Immediate settlement with real-time confirmation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">&lt;2s</div>
                      <div className="text-sm text-gray-600">Average processing time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">24/7</div>
                      <div className="text-sm text-gray-600">Service availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">15+</div>
                      <div className="text-sm text-gray-600">Supported banks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">99.9%</div>
                      <div className="text-sm text-gray-600">Success rate</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">Use Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <div className="font-medium text-[#1B2A3B]">E-commerce Payments</div>
                        <div className="text-gray-600">Instant checkout experiences</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-[#1B2A3B]">P2P Transfers</div>
                        <div className="text-gray-600">Person-to-person money transfers</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-[#1B2A3B]">Bill Payments</div>
                        <div className="text-gray-600">Utility and service payments</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-[#1B2A3B]">Salary Disbursement</div>
                        <div className="text-gray-600">Bulk salary payments</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Core Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
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
                        <div className="font-medium text-[#1B2A3B]">Transaction Tracking</div>
                        <div className="text-sm text-gray-600">Real-time status updates and transaction history</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Fraud Detection</div>
                        <div className="text-sm text-gray-600">Advanced AI-powered fraud prevention system</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Technical Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
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
                        <div className="font-medium text-[#1B2A3B]">Webhooks</div>
                        <div className="text-sm text-gray-600">Real-time event notifications</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">SDKs Available</div>
                        <div className="text-sm text-gray-600">Multiple programming language support</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Sandbox Environment</div>
                        <div className="text-sm text-gray-600">Full testing environment for development</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Integration Steps</CardTitle>
                <CardDescription>Get started with Instant Payments in just a few steps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#F37321] pl-4">
                    <h3 className="font-semibold text-[#1B2A3B] mb-2">Step 1: Get API Credentials</h3>
                    <p className="text-gray-600 mb-3">Sign up for a developer account and obtain your API keys from the console.</p>
                    <Button size="sm" className="bg-[#F37321] hover:bg-[#e06314] text-white">Get API Keys</Button>
                  </div>
                  
                  <div className="border-l-4 border-[#F37321] pl-4">
                    <h3 className="font-semibold text-[#1B2A3B] mb-2">Step 2: Install SDK</h3>
                    <p className="text-gray-600 mb-3">Choose your preferred programming language and install our SDK.</p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      npm install ethswitch-payments
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-[#F37321] pl-4">
                    <h3 className="font-semibold text-[#1B2A3B] mb-2">Step 3: Make Your First Payment</h3>
                    <p className="text-gray-600 mb-3">Use our simple API to create your first instant payment.</p>
                    <Button size="sm" variant="outline" className="text-[#1B2A3B] border-[#1B2A3B]">View Code Example</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Pricing Structure</CardTitle>
                <CardDescription>Simple, transparent pricing with no hidden fees</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction Volume</TableHead>
                      <TableHead>Rate per Transaction</TableHead>
                      <TableHead>Settlement Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>0 - 1,000</TableCell>
                      <TableCell>3.5 ETB</TableCell>
                      <TableCell>Instant</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1,001 - 10,000</TableCell>
                      <TableCell>3.0 ETB</TableCell>
                      <TableCell>Instant</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10,001+</TableCell>
                      <TableCell>2.5 ETB</TableCell>
                      <TableCell>Instant</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstantPaymentsOverview;
