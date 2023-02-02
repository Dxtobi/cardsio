
import { useRouter } from "next/router";


export default function Card1({ profile }) {


    const router = useRouter()
    //console.log(profile)

    return (
      <>
            <div className="w-full  md:w-[70%] lg:w-[50%] ">
                <button onClick={()=>router.back()}>Back</button>
                <div className="w-full h-[25vh] bg-purple-900 flex justify-center items-center" >
                    <img src={profile.image} alt="" className="w-[100px] h-[100px] rounded-lg" />
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-semibold">{profile.name}</div>
                    <div>{profile.occupation}</div>
                    <div>{profile.bio}</div>
                    <div>{ profile.name }</div>
                </div>
            </div>
            
      </>
    )
  }