import React, { Component } from 'react'
import  logo  from '../../../images/logo.png'

export default class
  extends Component {
  render() {
    return (
      <footer className='w-full  bg-slate-950 p-2 flex justify-center items-center text-white'>
        <img className='h-6 mx-2' src={logo} alt='Logo' />
        <h1 className='text-[12px] '> Kasun Miuranga © 2023  </h1>
      </footer>
    )
  }
}