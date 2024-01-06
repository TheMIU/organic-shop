import axios from 'axios';
import React, { Component } from 'react'

interface ContactProps {
  data: any;
}

interface ContactState {
  name: string;
  email: string;
  message: string;
}

export default class Contact extends Component<ContactProps, ContactState> {

  private api: any;

  constructor(props: any) {
    super(props);
    this.api = axios.create({ baseURL: `http://localhost:5000` });
    this.state = {
      name: "",
      email: "",
      message: ""
    }

    this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
  }


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
                value={this.state.name}
                onChange={this.handleMessageInputOnChange}
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
                value={this.state.email}
                onChange={this.handleMessageInputOnChange}
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
                value={this.state.message}
                onChange={this.handleMessageInputOnChange}
                className="w-full border-2 border-blue-500 rounded-md py-2 px-3 focus:outline-none focus:border-blue-900"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="button" className="add-to-cart-btn" onClick={this.onSendBtnClick}> Send Message </button>
          </form>
        </div>
      </div>
    )
  }

  handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    // @ts-ignore
    this.setState({
      [name]: value
    });
  }

  private onSendBtnClick = () => {
    try {
      this.api.post('/contact/submit', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }).then((res: { data: any }) => {
        const jsonData = res.data;
        alert(jsonData);
      }).catch((error: any) => {
        console.error("axios error : ", error);
      })
    } catch (error) {
      console.error("Error submitting data ", error);
    }
  }
}
