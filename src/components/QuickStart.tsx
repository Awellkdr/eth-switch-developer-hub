
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const QuickStart = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for a developer account and verify your email",
      action: "Sign Up",
      completed: false,
    },
    {
      number: "02", 
      title: "Get API Keys",
      description: "Generate your sandbox API keys to start testing",
      action: "Generate Keys",
      completed: false,
    },
    {
      number: "03",
      title: "Make Your First Call",
      description: "Test our API using the interactive playground",
      action: "Try Now",
      completed: false,
    },
    {
      number: "04",
      title: "Go Live",
      description: "Switch to production keys and start processing payments",
      action: "Go Live",
      completed: false,
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-green-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Quick Start Guide</CardTitle>
            <CardDescription>
              Get up and running with ETH Switch in minutes
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            5 min setup
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  size="sm" 
                  variant={step.completed ? "secondary" : "default"}
                >
                  {step.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStart;
