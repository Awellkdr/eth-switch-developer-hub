
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Building, Shield, Globe, CheckCircle, Clock } from "lucide-react";

const BankTransfersOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <CreditCard className="w-8 h-8 text-[#F37321] mr-3" />
            <h1 className="text-3xl font-bold text-[#1B2A3B]">Bank Transfers</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Secure inter-bank transfer operations with support for all major Ethiopian banks and international transfer protocols.
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
                    <CardTitle className="text-[#1B2A3B]">What are Bank Transfers?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Bank Transfers provide a secure and reliable way to move money between different banks and financial institutions. Our service supports both domestic transfers within Ethiopia and international transfers through SWIFT integration.
                    </p>
                    <p className="text-gray-600">
                      Built on robust banking infrastructure, our bank transfer service ensures compliance with all regulatory requirements while providing fast, secure, and cost-effective money movement solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">Transfer Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-[#1B2A3B] mb-2">Domestic Transfers</h4>
                        <p className="text-sm text-gray-600 mb-3">Transfer money between Ethiopian banks with same-day settlement.</p>
                        <div className="flex space-x-4 text-sm">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Same day settlement</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Low fees</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-[#1B2A3B] mb-2">International Transfers</h4>
                        <p className="text-sm text-gray-600 mb-3">SWIFT-enabled international transfers with competitive exchange rates.</p>
                        <div className="flex space-x-4 text-sm">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">SWIFT network</span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Global reach</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold text-[#1B2A3B] mb-2">Batch Transfers</h4>
                        <p className="text-sm text-gray-600 mb-3">Process multiple transfers simultaneously for efficiency.</p>
                        <div className="flex space-x-4 text-sm">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Bulk processing</span>
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Cost effective</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">Supported Banks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Commercial Bank of Ethiopia</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex justify-between">
                        <span>Dashen Bank</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex justify-between">
                        <span>Bank of Abyssinia</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex justify-between">
                        <span>Awash Bank</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex justify-between">
                        <span>United Bank</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-[#F37321] text-xs mt-2">+10 more banks supported</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1B2A3B]">Processing Times</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">Same Day</div>
                      <div className="text-sm text-gray-600">Domestic transfers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">1-3 Days</div>
                      <div className="text-sm text-gray-600">International transfers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#F37321]">Bulk</div>
                      <div className="text-sm text-gray-600">Batch processing</div>
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
                      <Building className="w-5 h-5 text-[#F37321] mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Multi-bank Support</div>
                        <div className="text-sm text-gray-600">Connect to all major Ethiopian banks</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-[#F37321] mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">SWIFT Integration</div>
                        <div className="text-sm text-gray-600">International transfer capabilities</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-[#F37321] mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Compliance</div>
                        <div className="text-sm text-gray-600">Full regulatory compliance and AML checks</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#F37321] mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Batch Processing</div>
                        <div className="text-sm text-gray-600">Process multiple transfers efficiently</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1B2A3B]">Security Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">End-to-end Encryption</div>
                        <div className="text-sm text-gray-600">All data encrypted in transit and at rest</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">AML Screening</div>
                        <div className="text-sm text-gray-600">Automated anti-money laundering checks</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Fraud Detection</div>
                        <div className="text-sm text-gray-600">Real-time fraud monitoring and prevention</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-[#1B2A3B]">Audit Trail</div>
                        <div className="text-sm text-gray-600">Complete transaction history and logging</div>
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
                <CardTitle className="text-[#1B2A3B]">Integration Guide</CardTitle>
                <CardDescription>Step-by-step integration process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#F37321] pl-4">
                    <h3 className="font-semibold text-[#1B2A3B] mb-2">Step 1: Account Setup</h3>
                    <p className="text-gray-600 mb-3">Complete KYB verification and obtain banking licenses.</p>
                    <Button size="sm" className="bg-[#F37321] hover:bg-[#e06314] text-white">Start Verification</Button>
                  </div>
                  
                  <div className="border-l-4 border-[#F37321] pl-4">
                    <h3 className="font-semibold text-[#1B2A3B] mb-2">Step 2: API Integration</h3>
                    <p className="text-gray-600 mb-3">Integrate our bank transfer APIs into your application.</p>
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                      POST /v1/transfers/bank
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-[#F37321] pl-4">
                    <h3 className="font-semibold text-[#1B2A3B] mb-2">Step 3: Testing</h3>
                    <p className="text-gray-600 mb-3">Test transfers in our sandbox environment.</p>
                    <Button size="sm" variant="outline" className="text-[#1B2A3B] border-[#1B2A3B]">Access Sandbox</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Transfer Fees</CardTitle>
                <CardDescription>Competitive rates for all transfer types</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transfer Type</TableHead>
                      <TableHead>Fee Structure</TableHead>
                      <TableHead>Processing Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Domestic</TableCell>
                      <TableCell>0.5% (min 5 ETB)</TableCell>
                      <TableCell>Same day</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>International</TableCell>
                      <TableCell>1.5% + SWIFT fees</TableCell>
                      <TableCell>1-3 business days</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Batch (100+)</TableCell>
                      <TableCell>0.3% per transfer</TableCell>
                      <TableCell>Same day</TableCell>
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

export default BankTransfersOverview;
