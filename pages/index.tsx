import { PrismaClient } from '@prisma/client';
import { signIn, signOut, getSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import CreateProfile from '../components/CreateProfile';
import NotSignedIn from '../components/NotSignedIn';
import SignedIn from '../components/SignedIn';

import CarouselElement from '../components/carosel/CaroselElelement';




const Home = (params: { session: any; profile: any; profiles: any; }) => {

  const {session, profile, profiles} = params

  //console.log(profiles);
  //const [editing, setEditing] = useState();

  return (
    <div className="flex min-h-[70vh] flex-col items-center  p-5 mt-20">
     
      {session && (
        <>
          <Image src={`${session.user.image}`} className='rounded-full' alt="avatar" width={60} height={60} />
          {profile && <SignedIn user={session.user} />}
          {!profile && <CreateProfile user={session.user} />}
          <br/>
          
          {profile && <Link className='p-4 bg-slate-900 text-white rounded-lg w-[100%] text-center' href={{
            pathname: "/editprofile",
            query: profile, // the data
          }} >Edit Profile</Link>}
          <br />
          {profile &&<Link className='p-4 bg-slate-900 text-white rounded-lg w-[100%] text-center' href={{
            pathname: "/card",
            query: profile, // the data
          }}>View</Link>}
          <br />


          <div className='text-center font-semibold text-xl'>
            Resent Users
          </div>
          
  


          

          <div className='my-5'>
            <CarouselElement profiles={profiles} />
          </div>

        <button className='p-4 bg-slate-900 text-white rounded-lg w-[100%]' onClick={() => signOut()}>Sign out</button>
      </>
      )}
      {!session && (
        <>
          <NotSignedIn />
          <br />
        <button className='p-4 bg-slate-900 text-white rounded-lg w-[100%]' onClick={() => signIn()}>Sign in</button>
      </>
      )}
    </div>
  )
}



export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient();
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
        session: null
      }, 
    }
  }

  interface User {
    email: string;
  }
  const sessionUser = session?.user as User;
  const profile = await prisma.profile.findUnique({ where: { email: sessionUser.email } });
  const profiles = await prisma.profile.findMany({ take:-3 });
  //console.log(session, profile);
  return {
    props: {
      session,
      profile,
      profiles
    },
  }
}
export default Home
