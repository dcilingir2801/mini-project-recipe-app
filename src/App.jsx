import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RecipesCard from "./pages/RecipesCard";
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import Form from "./components/Form";
function App() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Footer />

      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path='/recipes/:recipeId' element={<RecipesCard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/addrecipe" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;