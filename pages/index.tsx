import { PrismaClient } from '@prisma/client';
import type { NextPage } from 'next';
import { signIn, signOut, getSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import CreateProfile from '../components/CreateProfile';
import NotSignedIn from '../components/NotSignedIn';
import SignedIn from '../components/SignedIn';
import GetCardComp from './card';
import { useState } from 'react';


const Home: NextPage = ({session, profile}) => {

  //console.log(profile);
  const [editing, setEditing] = useState();

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
  const profile = await prisma.profile.findUnique({ where: { email: session?.user?.email } });
  //console.log(session, profile);
  return {
    props: {
      session,
      profile
    },
  }
}
export default Home
