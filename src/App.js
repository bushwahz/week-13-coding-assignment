// Import all components into the application
import Navbar from "./components/nav/Nabar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

// Run the App function and render elements
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// Export the App function to be imported
export default App;
