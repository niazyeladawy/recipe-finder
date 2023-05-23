import React from 'react'
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
}

export default Layout