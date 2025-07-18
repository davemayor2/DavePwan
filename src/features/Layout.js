import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className='flex-grow'>
          {children}
        </main>
        <Footer />
    </>
  )
}

export default Layout