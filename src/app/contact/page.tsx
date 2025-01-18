
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import Image from "next/image";
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";

export default function Contact() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div className="w-full">
        <Image
          src="/Group 78 (5).png"
          alt="furniture image"
          width={1440}
          height={316}
          className="w-full h-auto"
        />
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-2xl">
          Get In Touch With Us
        </h2>
        <p className="mt-4 text-center text-gray-500 text-base sm:text-sm">
          For more information about our product & services, please feel free
          to drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-600 mx-4 lg:mx-0">
            <div className="flex items-start">
              <IoLocationSharp className="text-black text-2xl" />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IoIosCall className="text-black text-2xl" />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-sm">Mobile: +(84) 546-6789</p>
                <p className="text-sm">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="text-black text-2xl" />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Working Time</h3>
                <p className="text-sm">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-sm">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-4">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject (optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm p-3"
                  rows={4}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap bg-[#F6F1E7] w-full mt-20 gap-10 px-4 py-6 justify-center">
        <div className="flex items-center gap-4">
          <SlTrophy className="w-12 h-12 " />
          <div>
            <h2 className="text-lg font-semibold">High Quality</h2>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SiTicktick className="w-12 h-12" />
          <div>
            <h2 className="text-lg font-semibold">Warranty Protection</h2>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/shipping.png"
            alt="Free Shipping"
            width={48}
            height={48}
          />
          <div>
            <h2 className="text-lg font-semibold">Free Shipping</h2>
            <p className="text-sm text-gray-600">Order Over $150</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/customer-support.png"
            alt="Customer Support"
            width={48}
            height={48}
          />
          <div>
            <h2 className="text-lg font-semibold">24/7 Support</h2>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
}
Contact();
