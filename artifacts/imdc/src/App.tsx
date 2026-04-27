import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";

// Pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Industries from "@/pages/industries";
import Resources from "@/pages/resources";
import Contact from "@/pages/contact";
import ServicesIndex from "@/pages/services/index";
import MedicalBilling from "@/pages/services/medical-billing";
import Coding from "@/pages/services/coding";
import Credentialing from "@/pages/services/credentialing";
import PriorAuth from "@/pages/services/prior-authorization";
import ClaimManagement from "@/pages/services/claim-management";
import PatientSupport from "@/pages/services/patient-support";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/industries" component={Industries} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={ServicesIndex} />
      <Route path="/services/medical-billing" component={MedicalBilling} />
      <Route path="/services/coding" component={Coding} />
      <Route path="/services/credentialing" component={Credentialing} />
      <Route path="/services/prior-authorization" component={PriorAuth} />
      <Route path="/services/claim-management" component={ClaimManagement} />
      <Route path="/services/patient-support" component={PatientSupport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
