import React from 'react'

function EloquenceFaq() {
  const faqs = [
    {
      question: "What can I expect from Eloquence पे चर्चा?",
      answer: "Eloquence पे चर्चा is a unique community program designed to enhance your public speaking skills. You can expect engaging live educational sessions, interactive activities, and the opportunity to learn from experts in the field. This program will help you build charismatic confidence, master storytelling, and effectively use visual aids.",
    },
    {
      question: "How is the program structured?",
      answer: "The program starts with live educational sessions where you will dive deep into various aspects of public speaking. You will also participate in interactive activities, brainstorming sessions, and impromptu speech practices. The structure is designed to provide a comprehensive learning experience with continuous engagement and feedback.",
    },
    {
      question: "Can the schedule be adjusted according to my needs?",
      answer: "The program offers live sessions with set schedules, but we strive to accommodate your availability. If you have specific time preferences, please let us know, and we will work to integrate them into the program where possible.",
    },
    {
      question: "Will there be any support provided after the program ends?",
      answer: "Yes, participants of Eloquence पे चर्चा will become part of our community group, where you can stay in touch with fellow speakers and receive ongoing support and insights. We aim to foster continuous growth and connection even after the program concludes.",
    },
    {
      question: "What is the coach’s experience and qualification in the field?",
      answer: "Coach Sushant Singhal has over 6 years of experience in public speaking. He has delivered 100+ speeches and mentored more than 500 participants, providing him with extensive expertise in guiding individuals to become confident and effective speakers.",
    },
  ];
  
  
  return (
    <>
      <section className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0 max-w-7xl m-auto h-full z-50 sm:mb-20 mb-5">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8 lg:max-w-7xl">
          <div className="relative w-full bg-white   ">
            <div className="">
              <div className="flex flex-col items-center ">
                <h2 className=" text-center text-3xl font-bold tracking-tight md:text-5xl">
                  FAQ
                </h2>
                <p className="sm:mt-3 mt-1 text-lg text-neutral-500 md:text-xl">
                  Frequently asked questions
                </p>
              </div>
              <div className="mx-auto mt-8 grid sm:max-w-2xl 2xl:max-w-7xl divide-y divide-neutral-200">
                {faqs.map((faq, index) => (
                  <div className="py-5" key={index}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EloquenceFaq