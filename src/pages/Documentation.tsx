
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Documentation = () => {
  const apiSections = [
    {
      title: "Getting Started",
      description: "Everything you need to know to get started with ETH Switch APIs",
      items: [
        { name: "Quick Start Guide", description: "Get up and running in 5 minutes" },
        { name: "Authentication", description: "API keys, tokens, and security" },
        { name: "Environment Setup", description: "Sandbox vs Production environments" },
        { name: "Rate Limits", description: "Understanding API call limits" }
      ]
    },
    {
      title: "Payment APIs",
      description: "Core payment processing and transfer APIs",
      items: [
        { name: "Instant Payments", description: "Real-time payment processing" },
        { name: "Bank Transfers", description: "Inter-bank transfer operations" },
        { name: "Mobile Wallet Transfers", description: "Mobile wallet integrations" },
        { name: "QR Code Payments", description: "QR-based payment flows" }
      ]
    },
    {
      title: "Request to Pay",
      description: "Payment request and collection APIs",
      items: [
        { name: "Create Payment Request", description: "Send payment requests to customers" },
        { name: "Request Status", description: "Track payment request status" },
        { name: "Notifications", description: "Real-time payment notifications" },
        { name: "Refunds", description: "Process refunds and reversals" }
      ]
    },
    {
      title: "Webhooks",
      description: "Real-time event notifications",
      items: [
        { name: "Webhook Setup", description: "Configure webhook endpoints" },
        { name: "Event Types", description: "Available webhook events" },
        { name: "Security", description: "Webhook signature verification" },
        { name: "Retry Logic", description: "Failed webhook handling" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">API Documentation</h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive guides and API reference for the ETH Switch platform
          </p>
          
          <div className="flex space-x-4">
            <Button>Get API Keys</Button>
            <Button variant="outline">Download SDKs</Button>
          </div>
        </div>

        {/* Quick access cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                Quick Start
              </CardTitle>
              <CardDescription>
                Get up and running in 5 minutes with our step-by-step guide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Building</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">🧪</span>
                API Playground
              </CardTitle>
              <CardDescription>
                Test our APIs interactively with live examples and responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Try APIs</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">📚</span>
                SDKs & Libraries
              </CardTitle>
              <CardDescription>
                Download SDKs for Java, Python, PHP, Node.js and more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Download SDKs</Button>
            </CardContent>
          </Card>
        </div>

        {/* API sections */}
        <div className="space-y-8">
          {apiSections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="p-4 border rounded-lg hover:border-blue-300 cursor-pointer transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="text-xs">REST</Badge>
                        <Badge variant="outline" className="text-xs">JSON</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code example section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Example: Create Instant Payment</CardTitle>
            <CardDescription>
              Here's a quick example of how to create an instant payment using our REST API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-2"># Make a POST request to create an instant payment</div>
              <div className="text-blue-400">curl</div> <span className="text-yellow-400">-X POST</span> https://api.ethswitch.com/v1/payments/instant \<br/>
              <span className="ml-4 text-yellow-400">-H</span> <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \<br/>
              <span className="ml-4 text-yellow-400">-H</span> <span className="text-green-400">"Content-Type: application/json"</span> \<br/>
              <span className="ml-4 text-yellow-400">-d</span> <span className="text-green-400">'{""{'"'}</span><br/>
              <span className="ml-8 text-white">"amount": 1000.00,</span><br/>
              <span className="ml-8 text-white">"currency": "ETB",</span><br/>
              <span className="ml-8 text-white">"from_account": "acc_123",</span><br/>
              <span className="ml-8 text-white">"to_account": "acc_456",</span><br/>
              <span className="ml-8 text-white">"description": "Payment for services"</span><br/>
              <span className="text-green-400">{"}"}'</span>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
