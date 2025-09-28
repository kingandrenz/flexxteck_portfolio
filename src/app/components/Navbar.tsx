"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-extrabold text-indigo-400 hover:text-indigo-300 transition duration-300">
          &lt; Anthony Kanu /&gt;
        </a>
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
        {/* Mobile menu */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 hover:text-indigo-400">
          <FaBars className="text-xl" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-slate-800 shadow-xl">
          <a href="#about" onClick={() => setOpen(false)} className="block py-3 px-4 hover:bg-indigo-700/50">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block py-3 px-4 hover:bg-indigo-700/50">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block py-3 px-4 hover:bg-indigo-700/50">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block py-3 px-4 hover:bg-indigo-700/50">Contact</a>
        </div>
      )}
    </header>
  );
}
