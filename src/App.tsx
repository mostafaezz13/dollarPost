import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/Layout";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// 👇 كومبوننت تجمع كل الصفحات
const HomePage = () => {
  return (
    <>
      <Index />
      <Projects />
      <Services />
      <WhoWeAre />
      <Contact />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* 👇 Route واحد بس */}
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;