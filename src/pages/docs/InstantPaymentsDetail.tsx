
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Copy, Play, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const InstantPaymentsDetail = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/v1/payments/instant",
      title: "Create Instant Payment",
      description: "Initiate a real-time payment transaction with immediate settlement",
      requestBody: {
        amount: { type: "number", required: true, description: "Payment amount in ETB" },
        from_account: { type: "string", required: true, description: "Source account identifier" },
        to_account: { type: "string", required: true, description: "Destination account identifier" },
        description: { type: "string", required: false, description: "Payment description" },
        reference: { type: "string", required: false, description: "External reference ID" }
      },
      response: {
        payment_id: "string",
        status: "string",
        amount: "number",
        currency: "string",
        created_at: "string",
        settlement_time: "string"
      }
    },
    {
      method: "GET",
      path: "/v1/payments/{id}/status",
      title: "Get Payment Status",
      description: "Retrieve real-time status of a payment transaction",
      parameters: {
        id: { type: "string", required: true, description: "Payment ID" }
      },
      response: {
        payment_id: "string",
        status: "string",
        amount: "number",
        from_account: "string",
        to_account: "string",
        created_at: "string",
        updated_at: "string"
      }
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
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
              ⚡
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#1B2A3B]">Instant Payments API</h1>
              <p className="text-lg text-gray-600">Real-time payment processing with immediate settlement</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Production Ready
          </Badge>
        </div>

        {/* Overview */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1B2A3B]">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The Instant Payments API enables real-time payment processing with settlement completed within 3 seconds. 
              Perfect for time-sensitive transactions and applications requiring immediate confirmation.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Sub-3s Settlement</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">24/7 Availability</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <div className="space-y-8">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className={`${
                      endpoint.method === 'POST' ? 'border-green-500 text-green-700' : 'border-blue-500 text-blue-700'
                    }`}>
                      {endpoint.method}
                    </Badge>
                    <div>
                      <CardTitle className="text-[#1B2A3B]">{endpoint.title}</CardTitle>
                      <code className="text-sm text-gray-600 font-mono">{endpoint.path}</code>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Try It
                  </Button>
                </div>
                <CardDescription>{endpoint.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="request" className="mt-6">
                    {endpoint.requestBody && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#1B2A3B]">Request Body</h4>
                        <div className="space-y-3">
                          {Object.entries(endpoint.requestBody).map(([key, value]) => (
                            <div key={key} className="border rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{key}</code>
                                <Badge variant={value.required ? "default" : "secondary"} className="text-xs">
                                  {value.required ? "Required" : "Optional"}
                                </Badge>
                                <span className="text-sm text-gray-500">{value.type}</span>
                              </div>
                              <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {endpoint.parameters && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#1B2A3B]">Path Parameters</h4>
                        <div className="space-y-3">
                          {Object.entries(endpoint.parameters).map(([key, value]) => (
                            <div key={key} className="border rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{key}</code>
                                <Badge variant="default" className="text-xs">Required</Badge>
                                <span className="text-sm text-gray-500">{value.type}</span>
                              </div>
                              <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="response" className="mt-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#1B2A3B]">Response Schema</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm text-gray-700">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="examples" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-[#1B2A3B]">cURL Example</h4>
                          <Button variant="outline" size="sm" onClick={() => copyCode(`curl -X ${endpoint.method} https://api.ethswitch.com${endpoint.path}`)}>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <div className="space-y-1">
                            <div>curl -X {endpoint.method} https://api.ethswitch.com{endpoint.path} \</div>
                            <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                            <div className="ml-4">-H "Content-Type: application/json" \</div>
                            {endpoint.requestBody && (
                              <>
                                <div className="ml-4">-d '{"{"}'</div>
                                <div className="ml-8">"amount": 1000.00,</div>
                                <div className="ml-8">"from_account": "acc_123",</div>
                                <div className="ml-8">"to_account": "acc_456",</div>
                                <div className="ml-8">"description": "Payment for services"</div>
                                <div className="ml-4">{"}"}'</div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Error Handling */}
        <Card className="mt-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span>Error Handling</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-red-800">400 - Bad Request</h5>
                <p className="text-red-700 text-sm">Invalid request parameters or missing required fields</p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-yellow-800">401 - Unauthorized</h5>
                <p className="text-yellow-700 text-sm">Invalid or missing API key</p>
              </div>
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-blue-800">422 - Unprocessable Entity</h5>
                <p className="text-blue-700 text-sm">Insufficient funds or account validation failed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstantPaymentsDetail;
