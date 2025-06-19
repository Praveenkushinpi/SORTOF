"use client";
import Image from "next/image";
import NavBar from "@/components/navBar";
import { useState } from "react";
import FeaturesPage from "@/components/features";
import CustomCursor from "@/components/customcursor";
export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('home');
  function handleNavigation(tab: string) {
    setActiveTab(tab);
  }

  return (
    <div id="app">
      <CustomCursor />
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold leading-tight px-8">
            SORTOF
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-4 lg:mt-6 leading-relaxed px-8">
            One Hand Solution For Your Everyday Notes
          </p>
          <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-6 text-gray-600 px-8">
            Explore the app and enjoy!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative min-h-[300px] ">
        <Image
          src="/bird.png"
          alt="A cute cat"
          fill
          className="object-cover"
        />
      </div>
    </div>
<div className="min-h-screen flex flex-col lg:flex-row">
      {/* Content Section - Left Side */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left px-8">
            What we are doing?
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 lg:mt-8 leading-relaxed text-gray-500 font-light px-8">
            <span className="font-semibold text-white">SORTOF</span> is a one-hand solution for your everyday notes. 
            It allows you to quickly jot down ideas, tasks, and reminders with ease, 
            making it perfect for busy individuals on the go.
          </p>

          {/* Feature List */}
          <div className="mt-8 lg:mt-12 space-y-6">
            <div className="flex items-start space-x-4 px-8">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold px-8">Quick Capture</h3>
                <p className="text-gray-600 px-8">Instantly capture your thoughts with one-handed operation</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 px-8">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold px-8">Mobile First</h3>
                <p className="text-gray-600 px-8">Designed for seamless mobile experience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 px-8">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold px-8">Stay Organized</h3>
                <p className="text-gray-600 px-8">Keep your ideas and tasks perfectly organized</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section - Right Side */}
      <div className="flex-1 relative min-h-[400px] lg:min-h-screen">
        <div className="grid grid-cols-2 gap-4 p-6 h-full">
          {/* Top Left Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src="/laptop.jpg"
              alt="Quick note taking interface"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Top Right Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src="/2.jpg"
              alt="Mobile note organization"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src="/3.jpg"
              alt="One-handed note writing"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src="/4.jpg"
              alt="Task management features"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
    <FeaturesPage />
    </div>
    </div>
  );
}