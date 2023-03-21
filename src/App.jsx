import "./App.css";
import Searchbar from "./components/Searchbar.jsx";
import Project from "./components/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Searchbar title="GET SRC" />}></Route>
          <Route path="/Project" element={<Project />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
