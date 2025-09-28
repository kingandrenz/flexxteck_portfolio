"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#0F172A] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-800 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Type your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg font-medium"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm text-green-400">{status}</p>
        )}
      </div>
    </section>
  );
}
