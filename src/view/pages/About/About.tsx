import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className=" h-screen text-center bg-[#0e7575]">
        <h1 className="text-3xl pt-10 text-white font-semibold mb-4">About</h1>

        <div className="max-w-md mx-auto bg-white bg-opacity-80 p-8 rounded-md shadow-md">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellen
            dus voluptatem praesentium molestias, beatae ipsam repellat reprehenderit omnis il
            lo placeat sint, dolor ut quam dolore officiis eligendi magnam temporibus nesciunt.</p>
        </div>
      </div>
    );
  }
}
