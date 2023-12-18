// navbar.tsx
import React, { Component } from 'react';
import logo from '../../../images/logo.png'
import { Link } from "react-router-dom"
import path from 'path';


export default class Navbar extends Component {
    render() {
        return (
            <div className='p-2 bg-[#0d4e0d] flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className='h-10 ml-2 mr-2' src={logo} alt='Logo' />
                    <h1 className='text-3xl  text-primary font-bold'>Organic Shop</h1>
                </div>

                <ul className='p-2 list-none flex text-white'>
                    <li className='inline-block mr-2 text-[11px] pl-5'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='inline-block mr-2 text-[11px] pl-5'>
                        <Link to="/contact"> Contact</Link>
                    </li>
                    <li className='inline-block mr-2 text-[11px] pl-5'>
                        <Link to="/about"> About</Link>
                    </li>
                </ul>

                <Link to={'/login'}>
                    <button className='bg-transparent hover:bg-white text-white
                 hover:text-[#0d4e0d] font-semibold py-2 px-4 border border-white hover:border-transparent rounded'>
                        Sign In
                    </button>
                </Link>

            </div>
        );


    }

}


