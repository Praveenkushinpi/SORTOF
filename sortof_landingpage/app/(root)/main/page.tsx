import Image from "next/image";
import CustomCursor from "@/app/components/customcursor";
import Features from "@/app/components/features";
import ScrollAnimate from "@/app/components/scrollanimate";

export default function Home() {
  return (
    <div id="app">
      <CustomCursor />
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold leading-tight px-8 motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-opacity-in-[1%] motion-blur-in-[100px] [2.25s]">
            SORTOF
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mt-4 lg:mt-6 leading-relaxed px-8 motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-opacity-in-[1%] motion-blur-in-[100px] [2.25s]">
            One Hand Solution For Your Everyday Notes
          </p>
          <p className="text-base sm:text-lg lg:text-xl mt-4 lg:mt-6 text-gray-600 px-8 motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-opacity-in-[1%] motion-blur-in-[100px] [2.25s]">
            Explore the app and enjoy!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative min-h-[300px] motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
        <Image
          src="/img/dolphin.png"
          alt="A dolphin"
          fill
          className="object-cover"
        />
      </div>
    </div>
<div className="min-h-screen flex flex-col lg:flex-row">
      {/* Content Section - Left Side */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <ScrollAnimate>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
            What we are doing?
          </h1>
          </ScrollAnimate>
          <ScrollAnimate>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 lg:mt-8 leading-relaxed text-gray-500 font-light px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
            <span className="font-semibold text-white">SORTOF</span> is a one-hand solution for your everyday notes. 
            It allows you to quickly jot down ideas, tasks, and reminders with ease, 
            making it perfect for busy individuals on the go.
          </p>
          </ScrollAnimate>
          {/* Feature List */}

          <div className="mt-8 lg:mt-12 space-y-6">
            <div className="flex items-start space-x-4 px-8">
              <ScrollAnimate>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              </ScrollAnimate>
              <div>                
                <ScrollAnimate>
                <h3 className="text-lg font-semibold px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Quick Capture</h3>
                <p className="text-gray-600 px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Instantly capture your thoughts with one-handed operation</p>
                </ScrollAnimate>
              </div>
            </div>
            <div className="flex items-start space-x-4 px-8">
              <ScrollAnimate>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              </ScrollAnimate>
              <div>
                <ScrollAnimate>
                <h3 className="text-lg font-semibold px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Mobile First</h3>
                <p className="text-gray-600 px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Designed for seamless mobile experience</p>
                </ScrollAnimate>
              </div>
            </div>
                
            <div className="flex items-start space-x-4 px-8">
              <ScrollAnimate>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              </ScrollAnimate>
              <div>
                <ScrollAnimate>
                <h3 className="text-lg font-semibold px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Stay Organized</h3>
                <p className="text-gray-600 px-8 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">Keep your ideas and tasks perfectly organized</p>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section - Right Side */}
      <div className="flex-1 relative min-h-[400px] lg:min-h-screen">
        
        <div className="grid grid-cols-2 gap-4 p-6 h-full">
          {/* Top Left Image */}          
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
            <Image
              src="/img/people-11.png"
              alt="Quick note taking interface"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Top Right Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
            <Image
              src="/img/people-9.png"
              alt="Mobile note organization"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
            <Image
              src="/img/people-12.png"
              alt="One-handed note writing"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg motion-translate-x-in-[100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
            <Image
              src="/img/people-13.png"
              alt="Task management features"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>  
        </div>
      </div>
    </div>
    <div>
    <Features />
    </div>
    </div>
  );
}