import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <h2 className='text-3xl underline decoration-2 pb-3'>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi neque omnis <br />
            dolorem inventore harum mollitia sequi, tempora soluta nam ex beatae laboriosam impedit labore <br />
            incidunt pariatur sapiente officia numquam!</p>
        </div>
      </div>
    );
  }
}
