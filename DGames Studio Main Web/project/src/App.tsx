import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import YouTube from './pages/YouTube';
import Store from './pages/Store';
import Events from './pages/Events';
import Community from './pages/Community';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-black opacity-50"></div>
              <div className="relative z-10">
                <Navbar />
                <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/youtube" element={<YouTube />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/store/:productId" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </motion.main>
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;