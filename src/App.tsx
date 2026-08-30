import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import CompanyPage from "./pages/CompanyPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ChatBot from "./components/chatbot/ChatBot";

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<ServiceDetailPage />} />
          <Route path="/company" element={<CompanyPage />} />
          
          {/* Legacy Aliases & Redirects */}
          <Route path="/services" element={<Navigate to="/solutions" replace />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<Navigate to="/company" replace />} />
        </Routes>

        <Footer />
        <ChatBot />
      </Router>
    </div>
  );
}
