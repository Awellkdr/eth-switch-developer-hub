
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  ArrowRight, 
  Key, 
  Shield, 
  Code, 
  Zap, 
  Users, 
  CreditCard,
  Copy,
  Download,
  Book
} from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    projectType: ""
  });

  const steps = [
    { id: 1, title: "Account Information", description: "Tell us about your company" },
    { id: 2, title: "Choose Plan", description: "Select the right plan for your needs" },
    { id: 3, title: "Verification", description: "Verify your identity" },
    { id: 4, title: "Get API Keys", description: "Access your development keys" }
  ];

  const plans = [
    {
      name: "Developer",
      price: "Free",
      description: "Perfect for testing and development",
      features: [
        "1,000 API calls/month",
        "Sandbox environment",
        "Basic documentation",
        "Community support"
      ],
      badge: "Most Popular",
      buttonText: "Start Free",
      highlighted: true
    },
    {
      name: "Startup",
      price: "$99",
      description: "For growing businesses",
      features: [
        "50,000 API calls/month",
        "Production environment",
        "Priority support",
        "Advanced analytics",
        "Webhook support"
      ],
      buttonText: "Choose Plan",
      highlighted: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited API calls",
        "Dedicated support",
        "SLA guarantees",
        "Custom integrations",
        "Advanced security"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  const integrationSteps = [
    {
      title: "Install SDK",
      code: "npm install ethswitch-sdk",
      description: "Install our official SDK for your preferred language"
    },
    {
      title: "Initialize Client",
      code: `import { EthSwitch } from 'ethswitch-sdk';

const client = new EthSwitch({
  apiKey: 'your_api_key',
  environment: 'sandbox'
});`,
      description: "Initialize the client with your API key"
    },
    {
      title: "Make Your First Call",
      code: `const payment = await client.payments.create({
  amount: 1000,
  currency: 'ETB',
  fromAccount: 'acc_123',
  toAccount: 'acc_456'
});`,
      description: "Create your first payment transaction"
    }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1B2A3B] mb-2">Account Information</h2>
              <p className="text-gray-600">Let's start by getting to know your business</p>
            </div>
            
            <div className="grid gap-4 max-w-lg mx-auto">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name *</Label>
                <Input
                  id="company-name"
                  placeholder="Your company name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="+251 9XX XXX XXX"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>
              
              <Button 
                onClick={() => setCurrentStep(2)}
                className="w-full bg-[#F37321] hover:bg-[#e06314] text-white mt-6"
                disabled={!formData.companyName || !formData.email || !formData.phoneNumber}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1B2A3B] mb-2">Choose Your Plan</h2>
              <p className="text-gray-600">Select the plan that best fits your needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.highlighted ? 'border-[#F37321] shadow-lg' : ''}`}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#F37321] text-white">{plan.badge}</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-[#1B2A3B]">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-[#F37321]">{plan.price}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => setCurrentStep(3)}
                      className={`w-full ${plan.highlighted ? 'bg-[#F37321] hover:bg-[#e06314] text-white' : 'border border-[#F37321] text-[#F37321] hover:bg-[#F37321] hover:text-white'}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1B2A3B] mb-2">Verification</h2>
              <p className="text-gray-600">We need to verify your identity for security purposes</p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#F37321]/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-[#F37321]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B2A3B]">Email Verification</h3>
                  <p className="text-gray-600">
                    We've sent a verification link to {formData.email}. 
                    Please check your email and click the link to continue.
                  </p>
                  <Button 
                    onClick={() => setCurrentStep(4)}
                    className="w-full bg-[#F37321] hover:bg-[#e06314] text-white"
                  >
                    I've Verified My Email
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    Resend Verification Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1B2A3B] mb-2">Your API Keys</h2>
              <p className="text-gray-600">Congratulations! Your account is ready. Here are your API keys.</p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Key className="w-5 h-5 text-[#F37321]" />
                    <span>Test API Key</span>
                    <Badge variant="secondary">Sandbox</Badge>
                  </CardTitle>
                  <CardDescription>Use this key for development and testing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <code className="bg-gray-100 px-3 py-2 rounded flex-1 text-sm">
                      sk_test_4eC39HqLyjWDarjtT1zdp7dc
                    </code>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Key className="w-5 h-5 text-[#F37321]" />
                    <span>Production API Key</span>
                    <Badge>Live</Badge>
                  </CardTitle>
                  <CardDescription>Use this key for production transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <code className="bg-gray-100 px-3 py-2 rounded flex-1 text-sm">
                      sk_live_••••••••••••••••••••••••
                    </code>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Production key is hidden for security. Click to reveal.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/docs">
                  <Button variant="outline" className="w-full">
                    <Book className="w-4 h-4 mr-2" />
                    Read Docs
                  </Button>
                </Link>
                <Link to="/playground">
                  <Button variant="outline" className="w-full">
                    <Code className="w-4 h-4 mr-2" />
                    Try Playground
                  </Button>
                </Link>
                <Link to="/console">
                  <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Go to Console
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      currentStep >= step.id
                        ? "bg-[#F37321] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.id ? "text-[#1B2A3B]" : "text-gray-500"
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? "bg-[#F37321]" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="mb-12">
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Integration Guide */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[#1B2A3B]">Quick Integration Guide</CardTitle>
              <CardDescription>Get started with ETH Switch in just a few steps</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="nodejs" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="nodejs" className="mt-6">
                  <div className="space-y-6">
                    {integrationSteps.map((step, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium text-[#1B2A3B]">{index + 1}. {step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                        <div className="bg-[#1B2A3B] rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                          <pre>{step.code}</pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="python" className="mt-6">
                  <div className="bg-[#1B2A3B] rounded-lg p-4 text-green-400 font-mono text-sm">
                    <pre>{`# Install the Python SDK
pip install ethswitch

# Initialize the client
from ethswitch import EthSwitch

client = EthSwitch(
    api_key='your_api_key',
    environment='sandbox'
)

# Create a payment
payment = client.payments.create(
    amount=1000,
    currency='ETB',
    from_account='acc_123',
    to_account='acc_456'
)`}</pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="php" className="mt-6">
                  <div className="bg-[#1B2A3B] rounded-lg p-4 text-green-400 font-mono text-sm">
                    <pre>{`<?php
// Install via Composer
// composer require ethswitch/ethswitch-php

require_once 'vendor/autoload.php';

use EthSwitch\\EthSwitch;

$client = new EthSwitch([
    'api_key' => 'your_api_key',
    'environment' => 'sandbox'
]);

$payment = $client->payments->create([
    'amount' => 1000,
    'currency' => 'ETB',
    'from_account' => 'acc_123',
    'to_account' => 'acc_456'
]);`}</pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="curl" className="mt-6">
                  <div className="bg-[#1B2A3B] rounded-lg p-4 text-green-400 font-mono text-sm">
                    <pre>{`curl -X POST https://api.ethswitch.com/v1/payments/instant \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "ETB",
    "from_account": "acc_123",
    "to_account": "acc_456"
  }'`}</pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
