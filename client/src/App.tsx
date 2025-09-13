// App.tsx
import { Router as WouterRouter, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/layout";
import ScrollToTop from "@/components/scrolltotop";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import WhyChooseUs from "@/pages/why-choose-us";
import Contact from "@/pages/contact";

function AppRoutes() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        {/* handle first load before the hash exists */}
        <Route path="" component={Home} />
        <Route path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/why-choose-us" component={WhyChooseUs} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Hash-based routing so GitHub Pages works without server rewrites */}
        <WouterRouter hook={useHashLocation}>
          <AppRoutes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
