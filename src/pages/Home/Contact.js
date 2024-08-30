import { useState } from "react";
import axios from "axios";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Contact() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Company, setCompany] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Firstname,Lastname,Company,Email,Phonenumber,Message);
    const data = {
      Fname: Firstname,
      Lname: Lastname,
      Company: Company,
      Email: Email,
      Phone: Phonenumber,
      Message: Message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/52f5f9d1-87aa-4c25-8266-48677efdfcdc",
        data
      )
      .then((response) => {
        console.log(response);
        setFirstname("");
        setLastname("");
        setCompany("");
        setEmail("");
        setPhonenumber("");
        setMessage("");
      });
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 sm:my-40  lg:overflow-visible lg:px-0 max-w-7xl m-auto z-50">
        <div className="mb-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10  ">
          <h1 className="text-black text-6xl lg:px-8  sm:pt-0 pt-10 px-0 ">
            Get In <span className="font-semibold  "> Touch</span>
            <hr className="border-2 w-1/3 border-secondary opacity" />
            <hr className="border-2 w-1/4 border-tertiary opacity mt-1" />
            <hr className="border-2 w-1/5 border-primary opacity mt-1" />
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col mx-auto  max-w-2xl  items-center gap-x-8 gap-y-16 lg:px-0  lg:max-w-7xl">
          <div className="isolate bg-white lg:px-8 lg:w-1/2 w-full px-0 ">
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-500 to-orange-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <form
              className=" mt-16 max-w-xl sm:mt-20   form"
              onSubmit={handleSubmit}
            >
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
                      onChange={(e) => setFirstname(e.target.value)}
                      value={Firstname}
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
                      onChange={(e) => setLastname(e.target.value)}
                      value={Lastname}
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
                      onChange={(e) => setCompany(e.target.value)}
                      value={Company}
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
                      onChange={(e) => setEmail(e.target.value)}
                      value={Email}
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
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>In</option>
                        <option>Us</option>
                        <option>EU</option>
                      </select>
                      <ChevronDownIcon
                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="tel"
                      name="Phonenumber"
                      onChange={(e) => setPhonenumber(e.target.value)}
                      value={Phonenumber}
                      id="Phonenumber"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      onChange={(e) => setMessage(e.target.value)}
                      value={Message}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

          <div className="lg:w-1/2 w-full  lg:px-8 px-0 ">
            <div className="mx-auto  lg:max-w-4xl sm:inline-block hidden">
              <img
                src="https://i.postimg.cc/sxSrT6xx/Untitled-design.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
