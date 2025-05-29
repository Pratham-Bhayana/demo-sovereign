import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProgramsPage from "@/pages/ProgramsPage";
import CalculatorPage from "@/pages/CalculatorPage";
import NotFound from "@/pages/not-found";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AIAssistant from "@/components/AIAssistant"; 
import ProgramDetailPage from "@/pages/ProgramDetailPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/calculator" component={CalculatorPage} />
            <Route path="/program/:id" component={ProgramDetailPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />

       {/* 👇 Persistent AI Assistant on all pages */}
      <AIAssistant />
    </div>
  );
}

export default App;
