import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, ...others }) {
    //console.log("layout:", others)
  return (
    <>
        <Navbar profile={others} />
            <main className='w-full md:w-[60%] lg:w-[50%] m-auto'>{children}</main>
        <Footer />
    </>
  )
}