
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Play, Copy, Download, Eye, EyeOff, Code, Zap, Shield, BookOpen, Terminal, Sparkles } from "lucide-react";

const Playground = () => {
  const [selectedApi, setSelectedApi] = useState("instant-payment");
  const [requestMethod, setRequestMethod] = useState("POST");
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [requestBody, setRequestBody] = useState(`{
  "amount": 1000.00,
  "currency": "ETB",
  "from_account": "acc_123",
  "to_account": "acc_456",
  "description": "Payment for services"
}`);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiEndpoints = [
    { id: "instant-payment", name: "Instant Payment", method: "POST", endpoint: "/v1/payments/instant", description: "Process instant payments between accounts" },
    { id: "bank-transfer", name: "Bank Transfer", method: "POST", endpoint: "/v1/transfers/bank", description: "Initiate bank-to-bank transfers" },
    { id: "mobile-wallet", name: "Mobile Wallet Transfer", method: "POST", endpoint: "/v1/transfers/mobile", description: "Transfer to mobile wallets" },
    { id: "payment-status", name: "Payment Status", method: "GET", endpoint: "/v1/payments/{payment_id}", description: "Check payment status" },
    { id: "request-to-pay", name: "Request to Pay", method: "POST", endpoint: "/v1/payments/request", description: "Create payment requests" },
  ];

  const handleApiTest = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(`{
  "status": "success",
  "payment_id": "pay_${Math.random().toString(36).substr(2, 9)}",
  "amount": 1000.00,
  "currency": "ETB",
  "transaction_reference": "TXN${Math.random().toString(36).substr(2, 8).toUpperCase()}",
  "timestamp": "${new Date().toISOString()}",
  "status_code": 200
}`);
      setIsLoading(false);
    }, 1500);
  };

  const selectedEndpoint = apiEndpoints.find(api => api.id === selectedApi);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero section */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-[#F37321]/10 to-[#F37321]/5 rounded-2xl">
              <Terminal className="w-12 h-12 text-[#F37321]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#1B2A3B] mb-4">API Playground</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Test ETH Switch APIs interactively with live requests and responses. 
            Build, debug, and perfect your integration in real-time.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Badge className="bg-[#F37321] text-white px-4 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Interactive Testing
            </Badge>
            <Badge variant="outline" className="border-[#1B2A3B] text-[#1B2A3B] px-4 py-2 text-sm">
              <Code className="w-4 h-4 mr-2" />
              Real API Calls
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-600 px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Sandbox Environment
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Request */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[#F37321]/5 to-[#F37321]/10 rounded-t-lg">
              <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                <Play className="w-5 h-5 text-[#F37321]" />
                <span>API Request Builder</span>
              </CardTitle>
              <CardDescription>Configure and send requests to ETH Switch APIs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              {/* API Selection */}
              <div className="space-y-3">
                <Label htmlFor="api-select" className="text-sm font-semibold text-gray-700">Select API Endpoint</Label>
                <Select value={selectedApi} onValueChange={setSelectedApi}>
                  <SelectTrigger className="border-gray-300 focus:border-[#F37321] focus:ring-[#F37321]">
                    <SelectValue placeholder="Choose an API endpoint" />
                  </SelectTrigger>
                  <SelectContent>
                    {apiEndpoints.map((api) => (
                      <SelectItem key={api.id} value={api.id}>
                        <div className="flex items-center space-x-3 py-2">
                          <Badge variant="outline" className="text-xs">{api.method}</Badge>
                          <div>
                            <div className="font-medium">{api.name}</div>
                            <div className="text-xs text-gray-500">{api.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Endpoint URL */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-700">Endpoint URL</Label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg border">
                  <Badge className="bg-[#1B2A3B] text-white">{selectedEndpoint?.method}</Badge>
                  <code className="text-sm flex-1 font-mono text-[#1B2A3B]">
                    https://api.ethswitch.com{selectedEndpoint?.endpoint}
                  </code>
                </div>
              </div>

              {/* API Key */}
              <div className="space-y-3">
                <Label htmlFor="api-key" className="text-sm font-semibold text-gray-700">API Key</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="api-key"
                    type={showApiKey ? "text" : "password"}
                    placeholder="sk_test_..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1 border-gray-300 focus:border-[#F37321] focus:ring-[#F37321]"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="border-gray-300"
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Request Body */}
              {selectedEndpoint?.method === "POST" && (
                <div className="space-y-3">
                  <Label htmlFor="request-body" className="text-sm font-semibold text-gray-700">Request Body (JSON)</Label>
                  <Textarea
                    id="request-body"
                    placeholder="Enter JSON request body..."
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    rows={8}
                    className="font-mono text-sm border-gray-300 focus:border-[#F37321] focus:ring-[#F37321] bg-gray-50"
                  />
                </div>
              )}

              {/* Send Request Button */}
              <Button 
                onClick={handleApiTest}
                disabled={isLoading || !apiKey}
                className="w-full bg-gradient-to-r from-[#F37321] to-[#e06314] hover:from-[#e06314] hover:to-[#d55a11] text-white shadow-lg py-3 text-lg font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Send Request</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Right side - Response */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
              <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-[#F37321]" />
                <span>API Response</span>
              </CardTitle>
              <CardDescription>View the response from your API request</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="response" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-50 m-6 mb-0">
                  <TabsTrigger value="response" className="data-[state=active]:bg-white">Response</TabsTrigger>
                  <TabsTrigger value="headers" className="data-[state=active]:bg-white">Headers</TabsTrigger>
                  <TabsTrigger value="curl" className="data-[state=active]:bg-white">cURL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="response" className="mt-0 p-6">
                  <div className="space-y-4">
                    {response && (
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          200 OK
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-gray-300">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-300">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-[#1B2A3B] rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto border">
                      {response ? (
                        <pre className="whitespace-pre-wrap">{response}</pre>
                      ) : (
                        <div className="text-gray-400 text-center py-12">
                          <Terminal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium mb-2">No response yet</p>
                          <p className="text-sm">Send a request to see the response here</p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="headers" className="mt-0 p-6">
                  <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm border">
                    <div className="space-y-2">
                      <div><span className="text-blue-600 font-semibold">Content-Type:</span> application/json</div>
                      <div><span className="text-blue-600 font-semibold">Authorization:</span> Bearer {apiKey || 'YOUR_API_KEY'}</div>
                      <div><span className="text-blue-600 font-semibold">User-Agent:</span> ETH-Switch-Playground/1.0</div>
                      <div><span className="text-blue-600 font-semibold">X-Request-ID:</span> req_playground_{Math.random().toString(36).substr(2, 9)}</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curl" className="mt-0 p-6">
                  <div className="bg-[#1B2A3B] rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto border">
                    <pre className="whitespace-pre-wrap">{`curl -X ${selectedEndpoint?.method || 'POST'} https://api.ethswitch.com${selectedEndpoint?.endpoint || ''} \\
  -H "Authorization: Bearer ${apiKey || 'YOUR_API_KEY'}" \\
  -H "Content-Type: application/json" \\${selectedEndpoint?.method === 'POST' ? `
  -d '${requestBody}'` : ''}`}</pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* API Documentation Quick Links */}
        <Card className="mt-12 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-[#1B2A3B] flex items-center justify-center space-x-2 text-2xl">
              <BookOpen className="w-6 h-6 text-[#F37321]" />
              <span>Quick Documentation Links</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Need help? Check out these documentation sections for detailed API information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-xl hover:border-[#F37321] hover:shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1B2A3B] text-lg">Authentication Guide</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Learn how to authenticate your API requests securely</p>
                <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321]">Documentation</Badge>
              </div>
              
              <div className="p-6 border rounded-xl hover:border-[#F37321] hover:shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-br from-red-50 to-red-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-red-500 rounded-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1B2A3B] text-lg">Error Codes</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Understanding API error responses and status codes</p>
                <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321]">Reference</Badge>
              </div>
              
              <div className="p-6 border rounded-xl hover:border-[#F37321] hover:shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1B2A3B] text-lg">SDKs & Libraries</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Download SDKs for your preferred programming language</p>
                <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321]">Download</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Playground;
