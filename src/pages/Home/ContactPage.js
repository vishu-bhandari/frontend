import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import image4 from "../../images/Banner-2.jpeg";
import ScrollToTopButton from "./ScrollToTopButton";

function ContactPage() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <section className="relative isolate overflow-hidden px-6   lg:overflow-visible lg:px-0 max-w-7xl m-auto border-t border-gray-100 rounded-xl z-50 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:px-0  lg:max-w-7xl">
          <div className="relative isolate overflow-hidden bg-white  lg:overflow-visible lg:px-0 max-w-7xl m-auto  mb-20">
            <div className="flex lg:flex-row flex-col">
              <div className="isolate bg-white lg:px-8 lg:w-1/2 w-full px-0 ">
                <h1 className="text-4xl font-semibold tracking-tight sm:my-8 my-5 text-black sm:text-5xl">
                  Get In <span className="font-normal">Touch</span>
                  <hr className="sm:border-2 border-[1.5px] w-1/3 border-secondary opacity" />
                  <hr className="sm:border-2 border-[1.5px] w-1/4 border-tertiary opacity mt-1" />
                  <hr className="sm:border-2 border-[1.5px] w-1/5 border-primary opacity mt-1" />
                </h1>

                <form className=" mt-16 max-w-xl sm:mt-20  form">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
                    <div>
                      <label
                        htmlFor="Firstname"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="Firstname"
                          id="Firstname"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="Lastname"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="Lastname"
                          id="Lastname"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Company"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Occupation
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="Company"
                          id="Company"
                          autoComplete="organization"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="Email"
                          id="Email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Phonenumber"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Phone number
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="tel"
                          name="Phonenumber"
                          id="Phonenumber"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="Message"
                          id="Message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-black  border-2  text-md  border-gradient shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                    >
                      Let's talk
                    </button>
                  </div>
                </form>
              </div>

              <div className="lg:w-1/2 w-full  px-0 sm:mb-20 mb-0 sm:shadow-md sm:border-2  border-0 shadow-md ">
                <img
                  src={image4}
                  alt="Contact Us"
                  className=" my-10  lg:my-0 lg:rounded-none rounded-xl w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
     
    </>
  );
}

export default ContactPage;
