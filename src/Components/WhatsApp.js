import React from "react";
import img from "../images/WhatsApp-Logo.wine.png";

function WhatsApp() {
  return (
    <>
      <div className="fixed bottom-6  -left-4 lg:-left-6 z-[1000]">
        <a
          href="https://wa.me/919910654407?text=Hey%20how%20can%20I%20help%20you%3F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={img} 
            className="w-24 md:w-26 lg:w-32 " 
            alt="WhatsApp" 
          />
        </a>
      </div>
    </>
  );
}

export default WhatsApp;
