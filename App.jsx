import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./pages/Tasks";
import Posts from "./pages/FuelOrders";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/orders" element={<Posts />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;