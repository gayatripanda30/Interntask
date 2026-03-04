import Booknow from "./components/Booknow/Booknow";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Booknow />
      </main>
      <Footer />
    </>
  );
}

export default App;