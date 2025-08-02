import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const BaseLayout = ({ children }) => {
    return (
        <div className="flex flex-col bg-white min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default BaseLayout