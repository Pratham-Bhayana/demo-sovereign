import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProgramsPage from "@/pages/ProgramsPage";
import CalculatorPage from "@/pages/CalculatorPage";
import NotFound from "@/pages/not-found";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
