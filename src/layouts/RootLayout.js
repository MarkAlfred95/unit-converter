import { Outlet } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer.js'


const RootLayout = () => {
  return (
    <div className="root-layout">
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default RootLayout;
