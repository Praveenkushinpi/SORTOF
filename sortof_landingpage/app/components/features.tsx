import ScrollAnimate from './scrollanimate';
import React from 'react';
import Link from "next/link";
const featuresPage = () => {
  const problems = [
  {
    id: 1,
    title: "Scattered Study Resources",
    problem: "STEM students juggle notes, textbooks, and external tools with no central place to review or revise.",
    solution: "One app for notes, flashcards, and revision. Unified and accessible from anywhere.",
    features: [
      "All-in-one note and flashcard tool",
      "Linked notes and spaced-repetition cards",
      "Offline access for uninterrupted learning"
    ],
    image: "img/people-1.png"
  },
  {
    id: 2,
    title: "Wasted Time Creating Flashcards",
    problem: "Manually turning notes into flashcards is time-consuming and inconsistent.",
    solution: "Use AI to automatically convert your notes into smart flashcards.",
    features: [
      "AI-generated Q&A cards from written content",
      "Customizable flashcards",
      "Supports math, code, and science topics"
    ],
    image: "img/people-4.png"
  },
  {
    id: 3,
    title: "Ineffective Revision",
    problem: "Random or last-minute revision doesn't help long-term memory retention.",
    solution: "Spaced repetition based on science to boost recall and confidence.",
    features: [
      "Daily review system",
      "Smart card prioritization",
      "Progress tracking"
    ],
    image: "img/people-2.png"
  },
  {
    id: 4,
    title: "Hard-to-Find Definitions and Concepts",
    problem: "Switching apps or searching online for simple definitions wastes time and breaks flow.",
    solution: "Ask the AI directly within the app. Get context, meaning, and examples instantly.",
    features: [
      "Built-in AI search for STEM topics",
      "Instant definitions and concept summaries",
      "Supports equations, terms, and code"
    ],
    image: "img/people-5.png"
  },
  {
    id: 5,
    title: "Lack of Structure and Focus",
    problem: "Students often don't know what to review or where to start studying from.",
    solution: "SORTOF intelligently organizes and schedules what matters most.",
    features: [
      "Deck and tag organization",
      "Smart reminders and reviews",
      "Minimal and focused design"
    ],
    image: "img/people-7.png"
  }
];

  return (
     <div className="min-h-screen bg-black ">
      {/* Hero Section */}
      <ScrollAnimate>
      <div className="border-b border-white">
        <div className="max-w-7xl mx-auto py-20 ">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-none flex motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
              PROBLEMS<br />
              WE SOLVE
            </h1>
            <p className="text-2xl text-gray-300 font-light max-w-2xl motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
              Real problems. Real solutions. Real results.
            </p>
          </div>
        </div>
        </div>
        </ScrollAnimate>
  

      {/* Problems and Solutions */}
      <div className="max-w-7xl mx-auto px-8">
        {problems.map((item, index) => (
          <div 
            key={item.id}
            className={`min-h-screen flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'} border-b border-gray-800 last:border-b-0`}
          >
            {/* Content Side */}
            <div className={`flex-1 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
              <div className="max-w-2xl">
                <div className="mb-12">
                  <h2 className="text-5xl font-black text-white mb-8 leading-tight motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[5.25s]">
                    {item.title.toUpperCase()}
                  </h2>
                </div>

                {/* Problem */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">PROBLEM</h3>
                  <p className="text-xl text-gray-200 font-medium leading-relaxed motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[5.25s]">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">SOLUTION</h3>
                  <p className="text-xl text-white font-bold leading-relaxed mb-6 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[5.25s]">
                    {item.solution}
                  </p>
                  
                  <div className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[2.25s]">
                        <div className="w-2 h-2 bg-white mr-4"></div>
                        <span className="text-lg font-medium text-gray-200 motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[5.25s]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className={`flex-1 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}>
              <div className="aspect-[4/5] relative motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[1%] motion-blur-in-[100px] motion-duration-[5.25s]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border-4 border-white"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <ScrollAnimate>
            <h2 className="text-6xl font-black mb-8 leading-none">
              READY TO<br />
              TRANSFORM?
            </h2>
            <p className="text-xl font-light mb-12 max-w-2xl">
              Stop managing problems. Start solving them.
            </p>
             </ScrollAnimate>
            <Link href="/Waitlist">
            <button className="group bg-black text-white px-12 py-6 text-xl font-bold hover:bg-gray-800 transition-colors flex items-center">
              START NOW
              <div className="w-6 h-6 ml-4 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <div className="w-6 h-6 ml-4 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    <div className="w-6 h-6 ml-4 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                        <div className="w-6 h-6 ml-4 flex items-center justify-center group-hover:translate-x-2 transition-transform">
  <span className="text-white text-xl">→</span>
</div>
                    </div>
                </div> 
              </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuresPage;