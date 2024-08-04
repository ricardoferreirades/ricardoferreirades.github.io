import CardsSection from "./components/CardsSection";
import Header from "./components/Header";
import TopBar from "./components/TopBar"; 

function App() {
  return <main className="container mx-auto relative">
    <TopBar />
    <Header />
    <CardsSection />
  </main>;
}

export default App;
