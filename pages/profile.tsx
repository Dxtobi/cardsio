
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
import EditProfile from "../components/EditProfile";
import { PrismaClient } from '@prisma/client';
import Profile1 from "../components/profiles/Profile1";
import Profile2 from "../components/profiles/Profile2";


export default function Profile({ profile, idType }) {
    //const 
    

   console.log(profile, idType, '--profile---')

    return (
      <div className="flex min-h-[70vh] flex-col items-center  p-0  ">
        {
          idType == 1000 && <Profile1 profile={profile}/>
        }
        {
          idType == 2000 && <Profile2 profile={profile}/>
        }
              
        </div>
    )
}


export async function getServerSideProps(context: any) {


    const prisma = new PrismaClient();
    //console.log(context.query.id);
    const idType = context.query.type

    const profile = await prisma.profile.findUnique({ where: { id: context.query?.id } });
    //console.log(profile);
    return {
      props: {
            profile,
            idType
      },
    }
  }