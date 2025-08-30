"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Trabaja con nosotros", href: "/team" },
  { name: "Beneficios", href: "/benefits" },
  { name: "Testimonios", href: "/testimonials" },
  { name: "Contacto", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/30 backdrop-blur-lg shadow-lg"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-empresa-salud-solo-vividos-web.png"  // 📌 pon tu logo en /public/logo.png
                alt="Alivio Vital Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div className="block">
                <h1 className="text-lg sm:text-2xl font-extrabold text-blue-serene font-[var(--font-dm-serif)]">
                  Alivio Vital
                </h1>
                <p className="text-xs sm:text-sm text-neutral-dark -mt-1 font-[var(--font-plus-jakarta)] font-semibold tracking-wide">
                  Home Care
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-2 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${isActive
                      ? "bg-blue-serene text-white shadow-md"
                      : "text-neutral-dark hover:bg-beige-200 hover:text-blue-serene"
                      }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="btn-primary text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-6">
                <span className="hidden lg:inline">Contáctanos</span>
                <span className="lg:hidden">Contacto</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-dark hover:bg-beige-200 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
                          ? "bg-blue-serene text-white shadow-md"
                          : "text-neutral-dark hover:bg-beige-200 hover:text-blue-serene"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-4"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-primary">
                      Contáctanos
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}