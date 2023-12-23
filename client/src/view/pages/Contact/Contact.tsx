import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className=" h-screen text-center bg-[#0e7575]">
        <h1 className="text-3xl pt-10 text-white font-semibold mb-4">Contact Me</h1>

        <div className="max-w-md mx-auto bg-white bg-opacity-80 p-8 rounded-md shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-2 border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border-2 border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="add-to-cart-btn"> Send Message </button>
          </form>
        </div>
      </div>
    )
  }
}
