import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Exhibitions from "./pages/Exhibitions";
import Plants from "./pages/Plants";
import Beginners from "./pages/Beginners";
import Inspiration from "./pages/Inspiration";
import Interesting from "./pages/Interesting";
import Mountains from "./pages/Mountains";
import Growers from "./pages/Growers";
import Clubs from "./pages/Clubs";
import About from "./pages/About";
import YearInAlpinum from "./pages/YearInAlpinum";
import Lexicon from "./pages/Lexicon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vystavy" element={<Exhibitions />} />
          <Route path="/rostliny" element={<Plants />} />
          <Route path="/zacatecnici" element={<Beginners />} />
          <Route path="/inspirace" element={<Inspiration />} />
          <Route path="/zajimavosti" element={<Interesting />} />
          <Route path="/hory" element={<Mountains />} />
          <Route path="/pestit" element={<Growers />} />
          <Route path="/klub" element={<Clubs />} />
          <Route path="/onas" element={<About />} />
          <Route path="/rok-v-alpinu" element={<YearInAlpinum />} />
          <Route path="/lexikon" element={<Lexicon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
