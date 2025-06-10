
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Documentation from "./pages/Documentation";
import InstantPaymentsOverview from "./pages/docs/InstantPaymentsOverview";
import BankTransfersOverview from "./pages/docs/BankTransfersOverview";
import Playground from "./pages/Playground";
import Console from "./pages/Console";
import Support from "./pages/Support";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";

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
          <Route path="/playground" element={<Playground />} />
          <Route path="/console/*" element={<Console />} />
          <Route path="/support" element={<Support />} />
          <Route path="/get-started" element={<GetStarted />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
