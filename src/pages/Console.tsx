
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
  Key, 
  Activity, 
  BarChart3, 
  Settings, 
  Copy, 
  Eye, 
  EyeOff, 
  Trash2,
  Plus,
  RefreshCw,
  TrendingUp,
  Users,
  DollarSign,
  Clock
} from "lucide-react";

const Console = () => {
  const [showTestKey, setShowTestKey] = useState(false);
  const [showLiveKey, setShowLiveKey] = useState(false);

  const apiKeys = [
    {
      id: "1",
      name: "Test Key",
      key: "sk_test_4eC39HqLyjWDarjtT1zdp7dc",
      type: "test",
      created: "2024-01-15",
      lastUsed: "2024-01-20"
    },
    {
      id: "2", 
      name: "Production Key",
      key: "sk_live_4eC39HqLyjWDarjtT1zdp7dc",
      type: "live",
      created: "2024-01-10",
      lastUsed: "2024-01-20"
    }
  ];

  const recentActivity = [
    {
      id: "1",
      endpoint: "/v1/payments/instant",
      method: "POST",
      status: "200",
      timestamp: "2024-01-20 14:30:25",
      duration: "245ms"
    },
    {
      id: "2",
      endpoint: "/v1/payments/qr",
      method: "POST", 
      status: "200",
      timestamp: "2024-01-20 14:25:12",
      duration: "182ms"
    },
    {
      id: "3",
      endpoint: "/v1/wallets/transfer",
      method: "POST",
      status: "400",
      timestamp: "2024-01-20 14:20:08",
      duration: "98ms"
    }
  ];

  const metrics = [
    {
      title: "Total Requests",
      value: "12,543",
      change: "+12%",
      trend: "up",
      icon: BarChart3
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.3%", 
      trend: "up",
      icon: TrendingUp
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+8%",
      trend: "up",
      icon: Users
    },
    {
      title: "Revenue",
      value: "$12,340",
      change: "+15%",
      trend: "up", 
      icon: DollarSign
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1B2A3B] mb-4">Developer Console</h1>
          <p className="text-lg text-gray-600">
            Manage your API keys, monitor usage, and track performance
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="api-keys" className="flex items-center space-x-2">
              <Key className="w-4 h-4" />
              <span>API Keys</span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center space-x-2">
              <Activity className="w-4 h-4" />
              <span>Activity</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                        <p className="text-2xl font-bold text-[#1B2A3B]">{metric.value}</p>
                        <p className="text-sm text-green-600">{metric.change} from last month</p>
                      </div>
                      <div className="p-3 bg-[#F37321]/10 rounded-full">
                        <metric.icon className="w-6 h-6 text-[#F37321]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Usage Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">API Usage Over Time</CardTitle>
                <CardDescription>Request volume for the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart visualization would go here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api-keys" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-[#1B2A3B]">API Keys</h2>
                <p className="text-gray-600">Manage your API keys for different environments</p>
              </div>
              <Button className="bg-[#F37321] hover:bg-[#e06314] text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create New Key
              </Button>
            </div>

            <div className="space-y-4">
              {apiKeys.map((key) => (
                <Card key={key.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-medium text-[#1B2A3B]">{key.name}</h3>
                          <Badge variant={key.type === "live" ? "default" : "secondary"}>
                            {key.type === "live" ? "Production" : "Test"}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                            {key.type === "test" 
                              ? (showTestKey ? key.key : key.key.slice(0, 12) + "...")
                              : (showLiveKey ? key.key : key.key.slice(0, 12) + "...")
                            }
                          </code>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => key.type === "test" ? setShowTestKey(!showTestKey) : setShowLiveKey(!showLiveKey)}
                          >
                            {(key.type === "test" ? showTestKey : showLiveKey) ? 
                              <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />
                            }
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(key.key)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="text-sm text-gray-600">
                          Created: {key.created} | Last used: {key.lastUsed}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Recent API Activity</CardTitle>
                <CardDescription>Monitor your recent API requests and responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {activity.method}
                        </Badge>
                        <div>
                          <code className="text-sm font-mono">{activity.endpoint}</code>
                          <div className="text-xs text-gray-500 flex items-center space-x-2">
                            <Clock className="w-3 h-3" />
                            <span>{activity.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={activity.status === "200" ? "default" : "destructive"}
                          className={activity.status === "200" ? "bg-green-100 text-green-800" : ""}
                        >
                          {activity.status}
                        </Badge>
                        <span className="text-sm text-gray-600">{activity.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1B2A3B]">Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input id="webhook-url" placeholder="https://your-domain.com/webhook" />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-[#F37321] hover:bg-[#e06314] text-white">
                    Save Changes
                  </Button>
                  <Button variant="outline">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Console;
