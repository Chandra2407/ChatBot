import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  return (
    <div className="min-h-screen bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-2 w-full text-white flex flex-col min-h-screen bg-gray-900">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App