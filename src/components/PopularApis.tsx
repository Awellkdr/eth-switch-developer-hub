
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PopularApis = () => {
  const apis = [
    {
      name: "Instant Payment",
      description: "Process real-time payments between banks and mobile wallets",
      method: "POST",
      endpoint: "/v1/payments/instant",
      popularity: "Most Popular",
      badge: "REST"
    },
    {
      name: "QR Code Payments",
      description: "Generate and process QR code-based payments",
      method: "POST", 
      endpoint: "/v1/payments/qr",
      popularity: "Trending",
      badge: "REST"
    },
    {
      name: "Mobile Wallet Transfer",
      description: "Transfer funds between mobile wallet providers",
      method: "POST",
      endpoint: "/v1/wallets/transfer", 
      popularity: "Popular",
      badge: "REST"
    },
    {
      name: "Request to Pay",
      description: "Send payment requests to customers via multiple channels",
      method: "POST",
      endpoint: "/v1/requests/pay",
      popularity: "New",
      badge: "REST"
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "POST":
        return "bg-green-100 text-green-800";
      case "GET":
        return "bg-blue-100 text-blue-800";
      case "PUT":
        return "bg-orange-100 text-orange-800";
      case "DELETE":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "Most Popular":
        return "bg-purple-100 text-purple-800";
      case "Trending":
        return "bg-orange-100 text-orange-800";
      case "Popular":
        return "bg-blue-100 text-blue-800";
      case "New":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Popular APIs</h2>
          <p className="text-gray-600">Most used endpoints by developers</p>
        </div>
        <Button variant="outline">View All APIs</Button>
      </div>
      
      <div className="grid gap-4">
        {apis.map((api, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-lg">{api.name}</CardTitle>
                    <Badge variant="secondary">{api.badge}</Badge>
                    <Badge 
                      variant="secondary" 
                      className={getPopularityColor(api.popularity)}
                    >
                      {api.popularity}
                    </Badge>
                  </div>
                  <CardDescription>{api.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant="secondary" 
                    className={getMethodColor(api.method)}
                  >
                    {api.method}
                  </Badge>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800">
                    {api.endpoint}
                  </code>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">View Docs</Button>
                  <Button size="sm">Try It</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularApis;
