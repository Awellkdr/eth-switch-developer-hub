
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Book, Code, FileText, Zap, CreditCard, Shield, Play, Download, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const quickStartGuides = [
    {
      title: "Authentication",
      description: "Set up API keys and secure authentication",
      icon: <Shield className="w-5 h-5" />,
      duration: "5 min",
      difficulty: "Beginner"
    },
    {
      title: "First Payment",
      description: "Send your first instant payment",
      icon: <Zap className="w-5 h-5" />,
      duration: "10 min",
      difficulty: "Beginner"
    },
    {
      title: "Webhooks Setup",
      description: "Configure real-time notifications",
      icon: <Code className="w-5 h-5" />,
      duration: "15 min",
      difficulty: "Intermediate"
    },
    {
      title: "Bulk Operations",
      description: "Process multiple payments efficiently",
      icon: <Users className="w-5 h-5" />,
      duration: "20 min",
      difficulty: "Advanced"
    }
  ];

  const apiProducts = [
    {
      title: "Instant Payments",
      description: "Real-time payments with sub-3 second settlement. Perfect for P2P transfers and instant checkouts.",
      icon: <Zap className="w-8 h-8" />,
      version: "v2.1",
      status: "Production Ready",
      features: ["Real-time Settlement", "P2P Transfers", "Merchant Payments", "Bulk Processing"],
      link: "/docs/instant-payments"
    },
    {
      title: "Bank Transfers",
      description: "Secure inter-bank transfers with SWIFT integration for domestic and international payments.",
      icon: <CreditCard className="w-8 h-8" />,
      version: "v3.2",
      status: "Production Ready",
      features: ["Domestic Transfers", "SWIFT Network", "AML/KYC Compliance", "Bulk Processing"],
      link: "/docs/bank-transfers"
    }
  ];

  const resources = [
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: <Book className="w-5 h-5" />,
      link: "/docs/api-documentation"
    },
    {
      title: "SDK Downloads",
      description: "Official SDKs for popular languages",
      icon: <Download className="w-5 h-5" />,
      link: "#"
    },
    {
      title: "Code Examples",
      description: "Sample applications and snippets",
      icon: <Code className="w-5 h-5" />,
      link: "#"
    },
    {
      title: "Tutorials",
      description: "Step-by-step integration guides",
      icon: <FileText className="w-5 h-5" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1B2A3B] mb-6">
            Developer Documentation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to integrate our payment APIs. From quick start guides to detailed API references.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link to="/docs/api-documentation">
                <Book className="w-5 h-5 mr-2" />
                Full API Documentation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-started">
                <Play className="w-5 h-5 mr-2" />
                Quick Start
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Start Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B2A3B] mb-8">Quick Start Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[#F37321]">{guide.icon}</div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">{guide.duration}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-[#1B2A3B]">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant={guide.difficulty === "Beginner" ? "default" : guide.difficulty === "Intermediate" ? "secondary" : "outline"}>
                    {guide.difficulty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B2A3B] mb-8">API Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {apiProducts.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-[#F37321]">{product.icon}</div>
                    <div>
                      <CardTitle className="text-[#1B2A3B]">{product.title}</CardTitle>
                      <div className="flex space-x-2 mt-2">
                        <Badge variant="secondary">{product.version}</Badge>
                        <Badge variant="default" className="bg-green-100 text-green-800">{product.status}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#1B2A3B] mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#F37321] rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex space-x-3">
                      <Button asChild className="flex-1">
                        <Link to={product.link}>
                          View Overview
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/docs/api-documentation">
                          Full Documentation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B2A3B] mb-8">Developer Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-[#F37321] mb-3">{resource.icon}</div>
                  <CardTitle className="text-[#1B2A3B]">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to={resource.link}>
                      Access Resource
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-[#F37321]/10 to-[#1B2A3B]/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-[#1B2A3B] mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Our developer support team is here to help you integrate successfully.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <Link to="/support">
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/playground">
                    Try API Playground
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
