import Head from 'next/head';
import Image from 'next/image';

export default function Navbar({profile}) {
    console.log('params:::', profile)
    return (
      <>
            <Head>
          <title>{profile.profile?.name} | {profile.session?.user?.name}</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='z-50 flex items-center justify-between p-5 fixed top-0 right-0 w-full box-shadow  header_div'>
                <div className='brand'>
                    <span className='text-gray-400'>Kard</span>Swap
                </div>
                {profile.session&&<img src={`${profile.session.user.image}`} className='rounded-full' alt="avatar" width={30} height={30} />}
            </div>
      </>
    )
  }