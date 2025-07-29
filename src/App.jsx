import { Import } from "lucide-react";
import AppHeader from "./Components/navigation/AppHeader";
import QuoteCard from "./Components/quoteCard/QuotCard";
function App() {
  return (
    <>
      <div className="navigation-menu">
        <AppHeader />
      </div>
      <section className="quote-cards-container">
        <QuoteCard />
      </section>
    </>
  );
}

export default App;
