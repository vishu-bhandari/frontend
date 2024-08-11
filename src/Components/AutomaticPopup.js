import React, { useState, useEffect, useRef } from "react";

import emailjs from "@emailjs/browser";

function AutomaticPopup() {
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setDisplayPopup(false);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8xtbk2q", "template_n1td15a", form.current, {
        publicKey: "tu02JHx1PdKEOxrep",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"  className="cursor-pointer"/>
    </form> */}

      <div
        className={`fixed inset-0 flex items-center justify-center bg-black/60 z-[10000] ${
          displayPopup ? "block" : "hidden"
        }`}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg text-right max-w-md w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
          <button
            id="close"
            onClick={handleClose}
            className="text-gray-600 text-2xl"
          >
            &times;
          </button>

          <h2 className="text-md font-bold mb-4 text-left">
            How may I help you?
          </h2>

          <div>
            <form
              className="space-y-2 text-left"
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="user_name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium text-gray-700"
                >
                  Company*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contactNo"
                  className="block text-xs font-medium text-gray-700"
                >
                  Contact No.*
                </label>
                <input
                  type="text"
                  id="contactNo"
                  name="contactNo"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  value="Send"
                  className="inline-block px-6 py-2 text-white bg-teal-500 rounded-md shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutomaticPopup;
