import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="flex w-screen h-screen flex-col bg-primary">
      <Router>
        <Header />
        <div className="flex w-full h-full p-2 bg-">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbid" element={<MovieDetails />} />
            {/* any route which is not defined can be written as "*" */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
