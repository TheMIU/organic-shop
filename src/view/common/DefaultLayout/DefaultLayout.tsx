import React, { Component } from 'react'
import Navbar from '../Navbar/navbar'
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

export default class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainContent />
                <Footer />
            </>
        )
    }
}
