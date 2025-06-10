import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Clock,
  Calendar,
  Globe,
  Shield,
  Filter,
  Download
} from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const Console = () => {
  const [showTestKey, setShowTestKey] = useState(false);
  const [showLiveKey, setShowLiveKey] = useState(false);
  const [timeRange, setTimeRange] = useState("7d");
  const [activityFilter, setActivityFilter] = useState("all");

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

  const metrics = [
    {
      title: "Total Requests",
      value: "12,543",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
      description: "API calls this month"
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.3%", 
      trend: "up",
      icon: TrendingUp,
      description: "Successful responses"
    },
    {
      title: "Active Users",
      value: "1,234",
      change: "+8%",
      trend: "up",
      icon: Users,
      description: "Unique API consumers"
    },
    {
      title: "Revenue",
      value: "$12,340",
      change: "+15%",
      trend: "up", 
      icon: DollarSign,
      description: "Generated this month"
    }
  ];

  // Enhanced chart data with more detailed analytics
  const usageData = [
    { date: "Jan 1", requests: 1200, successful: 1180, failed: 20, response_time: 245 },
    { date: "Jan 2", requests: 1400, successful: 1390, failed: 10, response_time: 198 },
    { date: "Jan 3", requests: 1600, successful: 1580, failed: 20, response_time: 267 },
    { date: "Jan 4", requests: 1300, successful: 1285, failed: 15, response_time: 189 },
    { date: "Jan 5", requests: 1800, successful: 1790, failed: 10, response_time: 201 },
    { date: "Jan 6", requests: 2100, successful: 2080, failed: 20, response_time: 234 },
    { date: "Jan 7", requests: 1900, successful: 1885, failed: 15, response_time: 212 },
  ];

  const endpointData = [
    { endpoint: "/v1/payments/instant", requests: 5420, success_rate: 99.2 },
    { endpoint: "/v1/transfers/bank", requests: 3210, success_rate: 98.8 },
    { endpoint: "/v1/wallets/payment", requests: 2890, success_rate: 97.5 },
    { endpoint: "/v1/qr/generate", requests: 1540, success_rate: 99.8 },
  ];

  const statusDistribution = [
    { name: "Success (2xx)", value: 94.2, color: "#10B981" },
    { name: "Client Error (4xx)", value: 4.8, color: "#F59E0B" },
    { name: "Server Error (5xx)", value: 1.0, color: "#EF4444" },
  ];

  const recentActivity = [
    {
      id: "1",
      endpoint: "/v1/payments/instant",
      method: "POST",
      status: "200",
      timestamp: "2024-01-20 14:30:25",
      duration: "245ms",
      ip: "192.168.1.100"
    },
    {
      id: "2",
      endpoint: "/v1/payments/qr",
      method: "POST", 
      status: "200",
      timestamp: "2024-01-20 14:25:12",
      duration: "182ms",
      ip: "10.0.0.15"
    },
    {
      id: "3",
      endpoint: "/v1/wallets/transfer",
      method: "POST",
      status: "400",
      timestamp: "2024-01-20 14:20:08",
      duration: "98ms",
      ip: "172.16.0.5"
    },
    {
      id: "4",
      endpoint: "/v1/transfers/bank",
      method: "GET",
      status: "200",
      timestamp: "2024-01-20 14:15:33",
      duration: "156ms",
      ip: "192.168.1.200"
    },
    {
      id: "5",
      endpoint: "/v1/qr/generate",
      method: "POST",
      status: "201",
      timestamp: "2024-01-20 14:10:45",
      duration: "123ms",
      ip: "10.0.0.25"
    }
  ];

  const chartConfig = {
    requests: {
      label: "Total Requests",
      color: "#F37321",
    },
    successful: {
      label: "Successful",
      color: "#10B981",
    },
    failed: {
      label: "Failed",
      color: "#EF4444",
    },
    response_time: {
      label: "Avg Response Time (ms)",
      color: "#8B5CF6",
    },
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const filteredActivity = recentActivity.filter(activity => {
    if (activityFilter === "all") return true;
    if (activityFilter === "errors") return activity.status.startsWith("4") || activity.status.startsWith("5");
    if (activityFilter === "success") return activity.status.startsWith("2");
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#1B2A3B] mb-2">Developer Console</h1>
              <p className="text-lg text-gray-600">
                Monitor, manage, and optimize your API integration
              </p>
            </div>
            <div className="flex space-x-3">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24h</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-[#F37321] text-[#F37321] hover:bg-[#F37321] hover:text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-[#F37321] hover:bg-[#e06314] text-white">
                <Globe className="w-4 h-4 mr-2" />
                Go Live
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Overview Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-[#F37321]/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-[#F37321]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1B2A3B]">Analytics Overview</h2>
          </div>

          {/* Enhanced Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Total Requests",
                value: "12,543",
                change: "+12%",
                trend: "up",
                icon: BarChart3,
                description: "API calls this month",
                details: "1,832 today"
              },
              {
                title: "Success Rate",
                value: "99.2%",
                change: "+0.3%", 
                trend: "up",
                icon: TrendingUp,
                description: "Successful responses",
                details: "vs 98.9% last month"
              },
              {
                title: "Avg Response Time",
                value: "218ms",
                change: "-15ms",
                trend: "up", 
                icon: Clock,
                description: "Average API latency",
                details: "P95: 450ms"
              },
              {
                title: "Revenue",
                value: "$12,340",
                change: "+15%",
                trend: "up", 
                icon: DollarSign,
                description: "Generated this month",
                details: "$412 today"
              }
            ].map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#F37321]/10 to-[#F37321]/5 rounded-xl">
                      <metric.icon className="w-6 h-6 text-[#F37321]" />
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      {metric.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-[#1B2A3B] mb-1">{metric.value}</p>
                    <p className="text-xs text-gray-500 mb-1">{metric.description}</p>
                    <p className="text-xs text-gray-400">{metric.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Usage Chart */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-[#F37321]" />
                  <span>Request Volume & Performance</span>
                </CardTitle>
                <CardDescription>API usage trends and response times</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <LineChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="requests" 
                      stroke="#F37321" 
                      strokeWidth={3}
                      dot={{ fill: "#F37321", strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="successful" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="response_time" 
                      stroke="#8B5CF6" 
                      strokeWidth={2}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Status Distribution */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-[#F37321]" />
                  <span>Response Status Distribution</span>
                </CardTitle>
                <CardDescription>HTTP status code breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart width={280} height={280}>
                    <Pie
                      data={statusDistribution}
                      cx={140}
                      cy={140}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </div>
                <div className="mt-4 space-y-2">
                  {statusDistribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Endpoint Performance */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                <Activity className="w-5 h-5 text-[#F37321]" />
                <span>Endpoint Performance</span>
              </CardTitle>
              <CardDescription>Most used API endpoints and their success rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpointData.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <code className="text-sm font-mono font-medium text-[#1B2A3B]">{endpoint.endpoint}</code>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{endpoint.requests.toLocaleString()} requests</span>
                        <span className="text-xs text-gray-500">Success rate: {endpoint.success_rate}%</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${endpoint.success_rate}%` }}
                        ></div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        {endpoint.success_rate}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Keys Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-[#F37321]/10 rounded-lg">
              <Key className="w-6 h-6 text-[#F37321]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1B2A3B]">API Keys</h2>
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Secure access tokens for different environments</p>
            <Button className="bg-[#F37321] hover:bg-[#e06314] text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Generate New Key
            </Button>
          </div>

          <div className="space-y-4">
            {apiKeys.map((key) => (
              <Card key={key.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="font-semibold text-[#1B2A3B] text-lg">{key.name}</h3>
                        <Badge 
                          variant={key.type === "live" ? "default" : "secondary"}
                          className={key.type === "live" ? "bg-[#F37321] text-white" : "bg-blue-100 text-blue-800"}
                        >
                          <Shield className="w-3 h-3 mr-1" />
                          {key.type === "live" ? "Production" : "Test"}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3 mb-3">
                        <code className="bg-gray-100 px-3 py-2 rounded-lg text-sm font-mono border">
                          {key.type === "test" 
                            ? (showTestKey ? key.key : key.key.slice(0, 12) + "...")
                            : (showLiveKey ? key.key : key.key.slice(0, 12) + "...")
                          }
                        </code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => key.type === "test" ? setShowTestKey(!showTestKey) : setShowLiveKey(!showLiveKey)}
                          className="border-gray-300"
                        >
                          {(key.type === "test" ? showTestKey : showLiveKey) ? 
                            <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />
                          }
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(key.key)}
                          className="border-gray-300"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Created: {key.created}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Last used: {key.lastUsed}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-gray-300">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Activity Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#F37321]/10 rounded-lg">
                <Activity className="w-6 h-6 text-[#F37321]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1B2A3B]">Recent Activity</h2>
            </div>
            <div className="flex items-center space-x-3">
              <Select value={activityFilter} onValueChange={setActivityFilter}>
                <SelectTrigger className="w-32">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Requests</SelectItem>
                  <SelectItem value="success">Success Only</SelectItem>
                  <SelectItem value="errors">Errors Only</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                <Activity className="w-5 h-5 text-[#F37321]" />
                <span>API Request Log</span>
              </CardTitle>
              <CardDescription>Real-time monitoring of your API requests and responses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {activity.method}
                      </Badge>
                      <div className="flex-1">
                        <code className="text-sm font-mono font-medium text-[#1B2A3B]">{activity.endpoint}</code>
                        <div className="text-xs text-gray-500 flex items-center space-x-4 mt-1">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.timestamp}
                          </span>
                          <span>IP: {activity.ip}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={activity.status.startsWith("2") ? "default" : "destructive"}
                        className={activity.status.startsWith("2") ? "bg-green-100 text-green-800 border-green-200" : ""}
                      >
                        {activity.status}
                      </Badge>
                      <span className="text-sm text-gray-600 font-mono min-w-[60px] text-right">{activity.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Settings Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-[#F37321]/10 rounded-lg">
              <Settings className="w-6 h-6 text-[#F37321]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1B2A3B]">Account Settings</h2>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-[#1B2A3B] flex items-center space-x-2">
                <Settings className="w-5 h-5 text-[#F37321]" />
                <span>Configuration</span>
              </CardTitle>
              <CardDescription>Manage your account preferences and API configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="text-sm font-medium text-gray-700">Company Name</Label>
                    <Input id="company-name" placeholder="Enter your company name" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhook-url" className="text-sm font-medium text-gray-700">Webhook URL</Label>
                  <Input id="webhook-url" placeholder="https://your-domain.com/webhook" className="border-gray-300" />
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <Button className="bg-[#F37321] hover:bg-[#e06314] text-white shadow-lg">
                  Save Changes
                </Button>
                <Button variant="outline" className="border-gray-300">
                  Cancel
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

export default Console;
