import Navbar from './navbar'
import Footer from './footer'

export default function Layout(params: { [x: string]: any; children: any }) {

  const { children, ...others } = params
    //console.log("layout:", others)
  return (
    <>
        <Navbar profile={others} />
            <main className='w-full md:w-[60%] lg:w-[50%] m-auto'>{children}</main>
        <Footer />
    </>
  )
}