
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
import { Play, Copy, Download, Eye, EyeOff } from "lucide-react";

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
    { id: "instant-payment", name: "Instant Payment", method: "POST", endpoint: "/v1/payments/instant" },
    { id: "bank-transfer", name: "Bank Transfer", method: "POST", endpoint: "/v1/transfers/bank" },
    { id: "mobile-wallet", name: "Mobile Wallet Transfer", method: "POST", endpoint: "/v1/transfers/mobile" },
    { id: "payment-status", name: "Payment Status", method: "GET", endpoint: "/v1/payments/{payment_id}" },
    { id: "request-to-pay", name: "Request to Pay", method: "POST", endpoint: "/v1/payments/request" },
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1B2A3B] mb-4">API Playground</h1>
          <p className="text-lg text-gray-600 mb-6">
            Test ETH Switch APIs interactively with live requests and responses
          </p>
          
          <div className="flex space-x-4">
            <Badge className="bg-[#F37321] text-white">Interactive Testing</Badge>
            <Badge variant="outline" className="border-[#1B2A3B] text-[#1B2A3B]">Real API Calls</Badge>
            <Badge variant="outline" className="border-green-500 text-green-600">Sandbox Environment</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Request */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#1B2A3B]">API Request</CardTitle>
              <CardDescription>Configure and send requests to ETH Switch APIs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* API Selection */}
              <div className="space-y-2">
                <Label htmlFor="api-select">Select API Endpoint</Label>
                <Select value={selectedApi} onValueChange={setSelectedApi}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an API endpoint" />
                  </SelectTrigger>
                  <SelectContent>
                    {apiEndpoints.map((api) => (
                      <SelectItem key={api.id} value={api.id}>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">{api.method}</Badge>
                          <span>{api.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Endpoint URL */}
              <div className="space-y-2">
                <Label>Endpoint URL</Label>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-[#1B2A3B] text-white">{selectedEndpoint?.method}</Badge>
                  <code className="bg-gray-100 px-3 py-2 rounded text-sm flex-1">
                    https://api.ethswitch.com{selectedEndpoint?.endpoint}
                  </code>
                </div>
              </div>

              {/* API Key */}
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="api-key"
                    type={showApiKey ? "text" : "password"}
                    placeholder="sk_test_..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Request Body */}
              {selectedEndpoint?.method === "POST" && (
                <div className="space-y-2">
                  <Label htmlFor="request-body">Request Body (JSON)</Label>
                  <Textarea
                    id="request-body"
                    placeholder="Enter JSON request body..."
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    rows={8}
                    className="font-mono text-sm"
                  />
                </div>
              )}

              {/* Send Request Button */}
              <Button 
                onClick={handleApiTest}
                disabled={isLoading || !apiKey}
                className="w-full bg-[#F37321] hover:bg-[#e06314] text-white"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Send Request</span>
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Right side - Response */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#1B2A3B]">API Response</CardTitle>
              <CardDescription>View the response from your API request</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="response">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="response">Response</TabsTrigger>
                  <TabsTrigger value="headers">Headers</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="response" className="mt-4">
                  <div className="space-y-4">
                    {response && (
                      <div className="flex justify-between items-center">
                        <Badge className="bg-green-100 text-green-800">200 OK</Badge>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-[#1B2A3B] rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                      {response ? (
                        <pre>{response}</pre>
                      ) : (
                        <div className="text-gray-400 text-center py-8">
                          No response yet. Send a request to see the response here.
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="headers" className="mt-4">
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                    <div className="space-y-1">
                      <div><span className="text-blue-600">Content-Type:</span> application/json</div>
                      <div><span className="text-blue-600">Authorization:</span> Bearer {apiKey || 'YOUR_API_KEY'}</div>
                      <div><span className="text-blue-600">User-Agent:</span> ETH-Switch-Playground/1.0</div>
                      <div><span className="text-blue-600">X-Request-ID:</span> req_playground_{Math.random().toString(36).substr(2, 9)}</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curl" className="mt-4">
                  <div className="bg-[#1B2A3B] rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                    <pre>{`curl -X ${selectedEndpoint?.method || 'POST'} https://api.ethswitch.com${selectedEndpoint?.endpoint || ''} \\
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
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-[#1B2A3B]">Quick Documentation Links</CardTitle>
            <CardDescription>
              Need help? Check out these documentation sections for detailed API information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:border-[#F37321] cursor-pointer transition-colors">
                <h4 className="font-medium text-[#1B2A3B] mb-2">Authentication Guide</h4>
                <p className="text-sm text-gray-600 mb-3">Learn how to authenticate your API requests</p>
                <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321]">Documentation</Badge>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-[#F37321] cursor-pointer transition-colors">
                <h4 className="font-medium text-[#1B2A3B] mb-2">Error Codes</h4>
                <p className="text-sm text-gray-600 mb-3">Understanding API error responses and status codes</p>
                <Badge variant="outline" className="text-xs border-[#F37321] text-[#F37321]">Reference</Badge>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-[#F37321] cursor-pointer transition-colors">
                <h4 className="font-medium text-[#1B2A3B] mb-2">SDKs & Libraries</h4>
                <p className="text-sm text-gray-600 mb-3">Download SDKs for your preferred programming language</p>
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
