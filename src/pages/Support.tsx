
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  FileText, 
  Video, 
  Users, 
  Zap,
  Shield,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Code,
  AlertCircle
} from "lucide-react";

const Support = () => {
  const faqs = [
    {
      question: "How do I get started with ETH Switch APIs?",
      answer: "Getting started is easy! Sign up for a free developer account, get your API keys, and check out our comprehensive documentation. You can also try our APIs in the playground before integrating."
    },
    {
      question: "What's the difference between test and live API keys?",
      answer: "Test keys work in our sandbox environment for development and testing. They don't process real money. Live keys are for production use and process actual transactions."
    },
    {
      question: "Are there any transaction limits?",
      answer: "Limits depend on your plan and verification level. Free accounts have lower limits, while verified business accounts have higher limits. Contact us for enterprise-level limits."
    },
    {
      question: "How secure are ETH Switch APIs?",
      answer: "We use bank-level security with TLS encryption, API key authentication, and comply with PCI-DSS standards. All transactions are monitored for fraud."
    },
    {
      question: "What programming languages do you support?",
      answer: "We provide official SDKs for Node.js, Python, PHP, Java, and Go. You can also use our REST API with any programming language that supports HTTP requests."
    },
    {
      question: "How do I handle webhook failures?",
      answer: "Our webhook system includes automatic retries with exponential backoff. You should also implement idempotency in your webhook handlers and return proper HTTP status codes."
    }
  ];

  const contactChannels = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat",
      highlighted: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      availability: "Response within 4 hours",
      action: "Send Email",
      highlighted: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Talk directly to our technical experts",
      availability: "Mon-Fri 9AM-6PM EAT",
      action: "Call Now",
      highlighted: false
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#F37321]" />,
      title: "API Documentation",
      description: "Comprehensive guides and references for all APIs",
      link: "/docs",
      badge: "Essential"
    },
    {
      icon: <Code className="w-8 h-8 text-[#F37321]" />,
      title: "Code Examples",
      description: "Ready-to-use code snippets and sample applications",
      link: "/playground",
      badge: "Popular"
    },
    {
      icon: <Video className="w-8 h-8 text-[#F37321]" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides for common integration scenarios",
      link: "#",
      badge: "New"
    },
    {
      icon: <Users className="w-8 h-8 text-[#F37321]" />,
      title: "Developer Community",
      description: "Join our Discord community to connect with other developers",
      link: "#",
      badge: "Active"
    }
  ];

  const statusItems = [
    { service: "Instant Payments API", status: "operational", uptime: "99.9%" },
    { service: "Bank Transfer API", status: "operational", uptime: "99.8%" },
    { service: "Mobile Wallet API", status: "operational", uptime: "99.7%" },
    { service: "QR Payment API", status: "operational", uptime: "99.9%" },
    { service: "Webhook Delivery", status: "operational", uptime: "99.6%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F37321]/10 text-[#F37321] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>24/7 Developer Support</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1B2A3B] to-[#F37321] bg-clip-text text-transparent mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get the support you need to build amazing payment solutions. 
            Our team of experts is here to help you succeed.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for help articles, guides, and documentation..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-[#F37321] rounded-xl"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#F37321] hover:bg-[#e06314] text-white">
              Search
            </Button>
          </div>
        </div>

        {/* Contact Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B2A3B] text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactChannels.map((channel, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                channel.highlighted ? 'border-[#F37321] shadow-lg' : ''
              }`}>
                {channel.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#F37321] text-white">Recommended</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${
                    channel.highlighted ? 'bg-[#F37321] text-white' : 'bg-[#F37321]/10 text-[#F37321]'
                  }`}>
                    {channel.icon}
                  </div>
                  <CardTitle className="text-[#1B2A3B]">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{channel.availability}</span>
                  </div>
                  <Button 
                    className={`w-full ${
                      channel.highlighted 
                        ? 'bg-[#F37321] hover:bg-[#e06314] text-white' 
                        : 'border border-[#F37321] text-[#F37321] hover:bg-[#F37321] hover:text-white'
                    }`}
                    variant={channel.highlighted ? "default" : "outline"}
                  >
                    {channel.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Content */}
        <Tabs defaultValue="faq" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="status">System Status</TabsTrigger>
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="w-5 h-5 text-[#F37321] mt-0.5" />
                        <div>
                          <h3 className="font-medium text-[#1B2A3B] mb-2">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {resource.icon}
                        <CardTitle className="text-[#1B2A3B]">{resource.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-[#F37321] text-[#F37321]">
                        {resource.badge}
                      </Badge>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-[#F37321] text-[#F37321] hover:bg-[#F37321] hover:text-white">
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="status">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-[#1B2A3B]">System Status</CardTitle>
                    <CardDescription>Real-time status of all ETH Switch services</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">All Systems Operational</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statusItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium text-[#1B2A3B]">{item.service}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Uptime: {item.uptime}</span>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Operational
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    View Full Status Page
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Contact Our Support Team</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Send us a message and we'll get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name *</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name *</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority Level</Label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F37321]">
                      <option>Low - General question</option>
                      <option>Medium - Integration help</option>
                      <option>High - Production issue</option>
                      <option>Critical - Service disruption</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide as much detail as possible about your question or issue..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-[#F37321] hover:bg-[#e06314] text-white">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Emergency Support */}
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <CardTitle className="text-red-800">Emergency Support</CardTitle>
            </div>
            <CardDescription className="text-red-700">
              Experiencing a critical production issue? Contact our emergency support line.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div>
                <p className="font-medium text-red-800">Emergency Hotline: +251 911 234 567</p>
                <p className="text-sm text-red-600">Available 24/7 for critical production issues</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
