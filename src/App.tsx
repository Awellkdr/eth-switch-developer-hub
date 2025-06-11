
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Documentation from "./pages/Documentation";
import Playground from "./pages/Playground";
import GetStarted from "./pages/GetStarted";
import Console from "./pages/Console";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import InstantPaymentsOverview from "./pages/docs/InstantPaymentsOverview";
import BankTransfersOverview from "./pages/docs/BankTransfersOverview";
import ApiDocumentation from "./pages/docs/ApiDocumentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/instant-payments" element={<InstantPaymentsOverview />} />
          <Route path="/docs/bank-transfers" element={<BankTransfersOverview />} />
          <Route path="/docs/api-documentation" element={<ApiDocumentation />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/console" element={<Console />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
