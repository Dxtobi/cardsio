import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, ...others }) {
    //console.log("layout:", others)
  return (
    <>
        <Navbar profile={others.profile} />
            <main>{children}</main>
        <Footer />
    </>
  )
}