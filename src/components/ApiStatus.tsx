
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ApiStatus = () => {
  const services = [
    { name: "Core Payment API", status: "operational", uptime: "99.9%" },
    { name: "Mobile Wallet API", status: "operational", uptime: "99.8%" },
    { name: "QR Code API", status: "operational", uptime: "99.7%" },
    { name: "Webhook Service", status: "maintenance", uptime: "98.5%" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-800";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800";
      case "degraded":
        return "bg-orange-100 text-orange-800";
      case "outage":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          System Status
          <Badge className="bg-green-100 text-green-800">All Systems Operational</Badge>
        </CardTitle>
        <CardDescription>
          Real-time status of ETH Switch APIs and services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
              <div>
                <h4 className="font-medium text-gray-900">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.uptime} uptime</p>
              </div>
              <Badge 
                variant="secondary" 
                className={getStatusColor(service.status)}
              >
                {service.status}
              </Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
            View detailed status →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiStatus;
