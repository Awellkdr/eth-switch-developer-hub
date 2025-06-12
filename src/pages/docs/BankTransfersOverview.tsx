
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Code, Clock, Shield, Zap, ArrowRight, CheckCircle, AlertCircle, Copy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BankTransfersOverview = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption and compliance with banking standards"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Reliable Processing",
      description: "Guaranteed delivery with comprehensive tracking and monitoring"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Multi-Bank Support",
      description: "Connect to all major Ethiopian banks through a single API"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Developer Friendly",
      description: "RESTful APIs with comprehensive documentation and SDKs"
    }
  ];

  const integrationSteps = [
    {
      step: "1",
      title: "Authentication",
      description: "Obtain your API credentials and authenticate your requests",
      code: `const response = await fetch('https://api.ethswitch.com/v1/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    client_id: 'your_client_id',
    client_secret: 'your_client_secret',
    grant_type: 'client_credentials'
  })
});`
    },
    {
      step: "2", 
      title: "Initiate Transfer",
      description: "Create a new bank transfer request",
      code: `const transferResponse = await fetch('https://api.ethswitch.com/v1/transfers/bank', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: 1000.00,
    currency: 'ETB',
    sender_account: '1234567890',
    recipient_account: '0987654321',
    recipient_bank_code: 'CBE',
    purpose: 'Payment for services',
    reference: 'TXN123456'
  })
});`
    },
    {
      step: "3",
      title: "Handle Response", 
      description: "Process the transfer response and handle status updates",
      code: `const result = await transferResponse.json();

if (result.status === 'pending') {
  console.log('Transfer initiated:', result.transaction_id);
  // Poll for status updates or use webhooks
} else if (result.status === 'completed') {
  console.log('Transfer completed successfully');
} else {
  console.error('Transfer failed:', result.error_message);
}`
    }
  ];

  const processFlow = [
    {
      step: 1,
      title: "Request Validation",
      description: "Validate transfer details and check account balances",
      status: "completed"
    },
    {
      step: 2,
      title: "Bank Authorization",
      description: "Route request to recipient bank for authorization",
      status: "completed"
    },
    {
      step: 3,
      title: "Fund Transfer",
      description: "Execute the actual fund transfer between accounts",
      status: "processing"
    },
    {
      step: 4,
      title: "Confirmation",
      description: "Send confirmation to both parties and update records",
      status: "pending"
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/v1/transfers/bank",
      description: "Initiate a new bank transfer",
      params: ["amount", "currency", "sender_account", "recipient_account", "recipient_bank_code"]
    },
    {
      method: "GET", 
      endpoint: "/v1/transfers/{id}",
      description: "Get transfer status and details",
      params: ["transaction_id"]
    },
    {
      method: "POST",
      endpoint: "/v1/transfers/batch",
      description: "Process multiple transfers in a single request",
      params: ["transfers[]"]
    },
    {
      method: "GET",
      endpoint: "/v1/transfers/history",
      description: "Retrieve transfer history with filtering options",
      params: ["from_date", "to_date", "status", "limit"]
    }
  ];

  const supportedBanks = [
    { code: "CBE", name: "Commercial Bank of Ethiopia", logo: "🏦" },
    { code: "DBE", name: "Development Bank of Ethiopia", logo: "🏛️" },
    { code: "AIB", name: "Awash International Bank", logo: "🏢" },
    { code: "BOA", name: "Bank of Abyssinia", logo: "🏦" },
    { code: "UB", name: "United Bank", logo: "🏛️" },
    { code: "NIB", name: "Nib International Bank", logo: "🏢" }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "0.50",
      description: "Perfect for small businesses",
      transactions: "Up to 1,000/month",
      features: ["Basic API access", "Email support", "Standard processing"]
    },
    {
      name: "Professional", 
      price: "0.35",
      description: "For growing businesses",
      transactions: "Up to 10,000/month", 
      features: ["Priority API access", "Phone & email support", "Faster processing", "Webhook notifications"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      transactions: "Unlimited",
      features: ["Dedicated API", "24/7 dedicated support", "Custom integration", "SLA guarantee"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Bank Transfers API</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Seamless Bank-to-Bank Transfers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect to all major Ethiopian banks and process secure, reliable transfers 
              with our comprehensive banking API infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader>
                  <div className="mx-auto mb-2 p-2 bg-primary/10 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="process">Process Flow</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>What are Bank Transfers?</CardTitle>
                  <CardDescription>
                    Understanding our bank transfer infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    ETH Switch Bank Transfer API enables secure, reliable money transfers between 
                    different bank accounts across Ethiopia's banking network. Our platform acts as 
                    a bridge between various banks, ensuring seamless interoperability.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Capabilities:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Inter-bank transfers across all major Ethiopian banks
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Real-time balance verification and fraud prevention
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Batch processing for multiple transfers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Comprehensive transaction tracking and reporting
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Integration with core banking systems
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Supported Banks</CardTitle>
                  <CardDescription>
                    Connect to Ethiopia's major banking institutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {supportedBanks.map((bank) => (
                      <div key={bank.code} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                        <span className="text-2xl">{bank.logo}</span>
                        <div>
                          <div className="font-medium">{bank.name}</div>
                          <div className="text-sm text-muted-foreground">{bank.code}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Integration Guide</CardTitle>
                  <CardDescription>
                    Get started with bank transfers in three simple steps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {integrationSteps.map((step, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-semibold">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.description}</p>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{step.code}</code>
                          </pre>
                          <Button
                            size="sm"
                            variant="outline"
                            className="absolute top-2 right-2"
                            onClick={() => copyToClipboard(step.code, `step-${index}`)}
                          >
                            {copiedCode === `step-${index}` ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        
                        {index < integrationSteps.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Process Flow</CardTitle>
                  <CardDescription>
                    Understanding how bank transfers are processed through our system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {processFlow.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          item.status === 'completed' ? 'bg-green-500 text-white' :
                          item.status === 'processing' ? 'bg-blue-500 text-white' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{item.title}</h3>
                            {item.status === 'completed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                            {item.status === 'processing' && <Clock className="h-4 w-4 text-blue-500" />}
                            {item.status === 'pending' && <AlertCircle className="h-4 w-4 text-muted-foreground" />}
                          </div>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>API Endpoints</CardTitle>
                  <CardDescription>
                    Complete API reference for bank transfer operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                            {endpoint.method}
                          </Badge>
                          <code className="bg-muted px-2 py-1 rounded text-sm">
                            {endpoint.endpoint}
                          </code>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{endpoint.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {endpoint.params.map((param) => (
                            <Badge key={param} variant="outline" className="text-xs">
                              {param}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Format</CardTitle>
                  <CardDescription>
                    Standard response structure for all endpoints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`{
  "status": "success|pending|failed",
  "transaction_id": "TXN_123456789",
  "amount": 1000.00,
  "currency": "ETB",
  "sender_account": "1234567890",
  "recipient_account": "0987654321",
  "recipient_bank": "CBE",
  "processing_time": "2024-01-15T10:30:00Z",
  "completion_time": "2024-01-15T10:32:15Z",
  "reference": "REF123456",
  "fees": {
    "transfer_fee": 5.00,
    "service_fee": 2.50
  },
  "message": "Transfer completed successfully"
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Developer Resources</CardTitle>
                    <CardDescription>
                      Tools and libraries to accelerate your integration
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      SDK Downloads
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Postman Collection
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Code Examples
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Testing Tools
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>
                      Comprehensive guides and references
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      API Reference
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Integration Guide
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Error Codes
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="mr-2 h-4 w-4" />
                      Best Practices
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pricing Plans</CardTitle>
                  <CardDescription>
                    Transparent pricing that scales with your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {pricingTiers.map((tier, index) => (
                      <div key={index} className={`border border-border rounded-lg p-6 ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                        {index === 1 && (
                          <Badge className="mb-4">Most Popular</Badge>
                        )}
                        <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold">
                            {tier.price === 'Custom' ? 'Custom' : `$${tier.price}`}
                          </span>
                          {tier.price !== 'Custom' && <span className="text-muted-foreground">/transaction</span>}
                        </div>
                        <p className="text-muted-foreground mb-4">{tier.description}</p>
                        <div className="mb-6">
                          <div className="font-medium mb-2">{tier.transactions}</div>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                          {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BankTransfersOverview;
