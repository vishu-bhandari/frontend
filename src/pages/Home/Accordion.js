import React, { useState } from "react";

import { useSelector } from "react-redux";



function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);


  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { portfolioData } = useSelector((state) => state.root);

  

  if (!portfolioData || !portfolioData.faq) {
    return <div>Loading...</div>;
  }

  const { faq } = portfolioData;

  
  return (
    <section className="relative isolate overflow-hidden px-6  lg:overflow-visible lg:px-0 max-w-7xl m-auto  z-[100] ">
      <div className="mb-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10  ">
        <h1 className="text-black text-6xl lg:px-8  px-0 ">
          Faq <span className="font-semibold  ">Corner</span>
          <hr className="border-2 w-1/3 border-secondary opacity" />
          <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
          <hr className="border-2 w-1/5 border-primary opacity mt-1" />
        </h1>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-8 sm:py-12 sm:pb-12 pb-5 lg:max-w-7xl">
  <div className="flex lg:flex-row flex-col">
    <div className="lg:w-1/2 m-auto w-full flex items-center justify-center p-4 lg:p-0">
      <div className="lg:w-[400px] lg:h-[400px] w-full h-full">
       <img src="" alt="" />
      </div>
    </div>
    <div className="lg:w-1/2 w-full p-4 lg:p-0">
      <div className="mx-auto rounded">
        <div className="md:p-10  shadow-md rounded-lg">
          <p className="text-2xl md:px-0 px-5 font-medium text-gray-800 my-1 hover:text-teal-500 ease-in-out transition-all duration-300">
            Questions You Might Have - FAQs
          </p>
          <div className="h-1 w-full mx-auto border-b my-5"></div>
          {faq.map((item, index) => (
            <div key={index} className="transition hover:bg-blue-50 sm:py-0 py-3">
              <div
                className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
                onClick={() => handleAccordionClick(index)}
              >
                <i
                  className={`fas ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
                <h3 className="break-words  ">{item.title}</h3>
              </div>
              <div
                className={`accordion-content md:px-5 px-2 pt-0 overflow-hidden ${
                  openIndex === index ? "max-h-full" : "max-h-0"
                }`}
                style={{ maxHeight: openIndex === index ? "100%" : "0" }}
              >
                <p className="leading-6 font-light pl-9 pb-5 text-justify break-words">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default Accordion;
