// navbar.tsx
import React, { Component } from 'react';
import logo from '../../../images/logo.png'
import { Link } from "react-router-dom"
import path from 'path';


export default class Navbar extends Component {
    render() {
        return (
            <div className='p-2 bg-slate-950 flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='h-[50px] ml-2 mr-2' src={logo} alt='Logo' />
                    <h1 className='text-2xl text-white font-medium'>Organic Shop</h1>
                </div>

                <div className='flex'>
                    <ul className='p-2 list-none flex text-white'>
                        <li className='inline-block mr-2 text-[15px] pl-5'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='inline-block mr-2 text-[15px] pl-5'>
                            <Link to="/contact"> Contact</Link>
                        </li>
                        <li className='inline-block mr-2 text-[15px] pl-5'>
                            <Link to="/about"> About</Link>
                        </li>
                    </ul>

                    <Link to={'/login'}>
                        <button className='bg-transparent hover:bg-white text-white
                 hover:text-[#0d4e0d] font-semibold py-1 px-2 border border-white hover:border-transparent rounded'>
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        );


    }

}


