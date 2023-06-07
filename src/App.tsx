import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col items-center px-5">
        <h2 className="mb-5 w-full  border-y-2 border-black py-5 text-center text-3xl font-semibold">
          Our Menu
        </h2>
        <p>
          Authentic Italian pizza, made with love and passion. 6 creative dishes
          to choose from. All from our stone oven, all organic, all delicious.
        </p>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
export default App;
