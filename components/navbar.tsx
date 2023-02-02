import Head from 'next/head';
import Image from 'next/image';

export default function Navbar({profile}) {
    //console.log('params:::', params)
    return (
      <>
            <Head>
            <title>Online Card</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='flex items-center justify-between p-5 fixed top-0 right-0 w-full box-shadow bg-white'>
                <div className='brand'>
                    <span className='text-gray-400'>Kard</span>Swap
                </div>
                {profile&&<img src={`${profile.image}`} className='rounded-full' alt="avatar" width={30} height={30} />}
            </div>
      </>
    )
  }