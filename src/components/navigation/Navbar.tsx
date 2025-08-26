"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Menu, X, Phone, MessageCircle, Heart } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const isScrolled = scrollY > 50;

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-xl border-b-2 border-teal-200/50"
          : "bg-white/95 backdrop-blur-lg shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div 
              className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-500 via-teal-400 to-lime-500 rounded-xl shadow-lg flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              <Heart className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-lime-400/30 rounded-xl blur-sm"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-xl lg:text-2xl text-gray-900 tracking-tight">
                Alivio Vital
              </span>
              <span className="text-sm lg:text-base text-teal-600 font-medium">
                Cuidado en casa
              </span>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-gray-700 font-semibold text-base rounded-lg transition-all duration-300 hover:text-teal-600 hover:bg-teal-50/80 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-lime-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                />
              </motion.button>
            ))}
          </div>

          {/* Enhanced Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-teal-500 text-teal-600 font-semibold px-5 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-600 transition-all duration-300 shadow-sm"
                onClick={() => window.open('tel:+573001234567')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('#contacto')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 border-2 border-gray-200 hover:border-teal-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t-2 border-teal-100 shadow-xl"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 border border-transparent hover:border-teal-200"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.div 
                className="pt-6 space-y-4 border-t border-teal-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="w-full border-2 border-teal-500 text-teal-600 font-semibold py-3 rounded-xl hover:bg-teal-50 hover:border-teal-600 transition-all duration-300"
                  onClick={() => window.open('tel:+573001234567')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection('#contacto')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual Enhancement: Gradient Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-lime-400 to-teal-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.nav>
  );
};

export default Navbar;