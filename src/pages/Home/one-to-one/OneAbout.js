import React from "react";

function OneAbout() {
  const sections = [
    {
      heading: "1. Mastering Communication & Public Speaking",
      items: [
        "Voice Impact: Captivate with your voice.",
        "Avoiding Monotony: Develop engaging storytelling.",
        "Effective Speech: Connect logically and emotionally.",
        "Overcoming Nervousness: Build confidence and fluency.",
        
      ]
    },
    {
      heading: "2. Enhancing Success Skills",
      items: [
        "Strategic Planning: Plan and execute effectively.",
        "Multitasking Hacks: Manage multiple tasks efficiently.",
        "Networking: Expand your professional and personal network.",
        "Work Management: Handle tasks from your network."
      ]
    },
    {
      heading: "3. Overcoming Stage Fright",
      items: [
        "Ice Breakers: Build comfort with ease.",
        "Course Guide: Maximize your learning experience.",
        "Speaking Anxiety: Manage and overcome fears.",
        "Fear Management: Strategies for overcoming stage fright.",
        "Confidence Building: Develop a strong speaker mindset."
      ]
    },
    {
      heading: "4. Speaking with Conviction & Clarity",
      items: [
        "Vocal Techniques: Master pitch, pace, and volume.",
        "Effective Delivery: Principles for impactful speaking.",
        "Addressing Barriers: Overcome speech clarity issues."
      ]
    },
    {
      heading: "5. Projecting Confidence & Poise",
      items: [
        "Learn from Champions: Analyze award-winning talks.",
        "Hand Gestures: Use gestures to enhance delivery.",
        "Stage Movement: Move confidently and purposefully.",
        "Eye Contact: Engage with impactful eye contact."
      ]
    },
    {
      heading: "6. Structuring Clear & Simple Messages",
      items: [
        "Speech Structure: Organize content clearly.",
        "Pitch Insights: Craft compelling messages with examples.",
        "Openings & Closings: Create memorable beginnings and endings."
      ]
    },
    {
      heading: "7. Speaking Confidently on Any Topic",
      items: [
        "Framework: Structure thoughts on any subject.",
        "Nervousness Tips: Practical advice to overcome stage fright."
      ]
    },
    {
      heading: "8. Storytelling for Emotional Connection",
      items: [
        "Importance: Use storytelling to engage.",
        "Crafting Stories: Build compelling narratives.",
        "Memorable Techniques: Make stories impactful.",
        "Practice: Refine storytelling in various contexts.",
        "Data Storytelling: Present data effectively."
      ]
    },
    {
      heading: "9. Keeping Your Audience Engaged",
      items: [
        "Engagement Strategies: Keep your audience captivated.",
        "Avoid Monotony: Techniques to stay dynamic."
      ]
    },
    {
      heading: "10. Influencing Your Audience",
      items: [
        "Influence Methods: Persuade effectively.",
        "Speech Analysis: Learn from influential talks.",
        "Practice Influence: Apply techniques in various scenarios."
      ]
    },
  ];
  

  // Split sections into two halves for balanced columns
  const midIndex = Math.ceil(sections.length / 2);
  const firstHalf = sections.slice(0, midIndex);
  const secondHalf = sections.slice(midIndex);

  return (
    <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl mx-auto h-full">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:px-8 lg:max-w-7xl ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-8 lg:space-y-0 lg:col-span-1">
          {firstHalf.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <div className="space-y-2 mt-5">
                <span className={`rounded-full sm:uppercase   px-3 py-0.5 sm:text-lg text-sm font-semibold leading-5 text-white ${sectionIndex % 2 === 0 ? 'bg-teal-700' : 'bg-orange-700'}`}>
                  {section.heading}
                </span>
              </div>
              <p className="text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                <ul className="flex sm:gap-5 gap-0  flex-col">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start sm:mt-5 mt-2 lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-gray-600">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className="space-y-8 lg:space-y-0 lg:col-span-1">
          {secondHalf.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <div className="space-y-2 mt-5">
                <span className={`rounded-full sm:uppercase   px-3 py-0.5 sm:text-lg text-sm font-semibold leading-5 text-white ${sectionIndex % 2 === 0 ? 'bg-teal-700' : 'bg-orange-700'}`}>
                  {section.heading}
                </span>
              </div>
              <p className="text-base text-black sm:mt-5 sm:text-xl lg:text-lg xl:text-lg">
                <ul className="flex sm:gap-5 gap-0 flex-col">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start sm:mt-5 mt-2 lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-gray-600">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default OneAbout;
