
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar(params: { [x: string]: any; }) {
  const { session, ...others } = params
  const [userName, setUser] = useState('Kard-io')
  const [userImg, setImage] = useState(null)

  useEffect(() => {
    if (others.profile?.session?.user.name && others.profile?.session?.user.image) {
      setImage(others.profile.session.user.image)
      setUser(others.profile.session.user.name)
      return 
    }
  }, [params])
  //console.log('session:::', others)
    return (
      <>
            <Head>
          <title>{userName}</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='z-50 flex items-center justify-between p-5 fixed top-0 right-0 w-full box-shadow  header_div'>
                <div className='brand text-purple-600'>
                    <span className='text-gray-400'>Kard</span>Swap
                </div>
                {userImg &&<img src={`${userImg}`} className='rounded-full' alt="avatar" width={30} height={30} />}
            </div>
      </>
    )
  }