"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name submitted:", name)
    console.log("Email submitted:", email);
    setSubmitted(true);
    setSubmitted(true)
    setEmail("");
  };

 const scatteredImages = [
  { src: "/img/people-5.png", className: "top-4 left-6 rotate-12" },
  { src: "/img/people-6.png", className: "top-10 right-10 -rotate-6" },
  { src: "/img/people-7.png", className: "bottom-10 left-12 rotate-3" },
  { src: "/img/people-8.png", className: "bottom-16 right-8 -rotate-3" },
  { src: "/img/people-9.png", className: "top-1/2 left-4 -translate-y-1/2 rotate-6" },
  { src: "/img/people-10.png", className: "top-1/2 right-4 -translate-y-1/2 -rotate-6" },
  { src: "/img/people-11.png", className: "bottom-4 left-1/2 -translate-x-1/2 rotate-2" },
  { src: "/img/people-12.png", className: "top-2 left-1/2 -translate-x-1/2 -rotate-2" },
];


  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Scattered Images */}
      {scatteredImages.map(({ src, className }, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`person-${idx}`}
          width={400}
          height={400}
          className={`absolute opacity-30 ${className}`}
        />
      ))}

      {/* Waitlist Form */}
      <div className="z-10 max-w-lg w-full bg-black/70 p-8 rounded-xl shadow-lg backdrop-blur-md text-center">
        <h1 className="text-5xl font-bold mb-4">Join the Waitlist</h1>
        <p className="text-lg text-gray-300 mb-6">
          Be the first to try <strong>SORTOF</strong> — your one-hand solution for everyday notes.
        </p>

        {submitted ? (
          <p className="text-green-400 text-xl font-semibold">🎉 You're on the list!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="Name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 text-white rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              Notify Me
            </button>
          </form>
        )}

        <Link href="/">
          <button className="mt-6 text-sm text-gray-300 underline hover:text-white transition-colors">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}