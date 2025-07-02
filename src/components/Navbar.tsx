'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="w-full px-1 sm:px-10 py-3 flex items-center justify-between">
        <div className="mr-auto">
          <h1 className="text-xl font-bold text-indigo-600 pl-2">Dr. Serena Blake,</h1>
          <h3 className="text-sm font-bold text-indigo-600 pl-2">PsyD (Clinical Psychologist)</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-indigo-600 text-[#4a5568] cursor-pointer"
            >
              Home
            </button>
          </li>
          <li><a href="#about" className="hover:text-indigo-600 text-[#4a5568]">About</a></li>
          <li><a href="#services" className="hover:text-indigo-600 text-[#4a5568]">Services</a></li>
          <li><a href="#faq" className="hover:text-indigo-600 text-[#4a5568]">FAQ</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 text-[#4a5568]">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl text-[#4a5568]">&#9776;</span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#about" className="block hover:text-indigo-600 text-[#4a5568]">About</a></li>
            <li><a href="#services" className="block hover:text-indigo-600 text-[#4a5568]">Services</a></li>
            <li><a href="#faq" className="block hover:text-indigo-600 text-[#4a5568]">FAQ</a></li>
            <li><a href="#contact" className="block hover:text-indigo-600 text-[#4a5568]">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
