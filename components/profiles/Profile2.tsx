
import { useRouter } from "next/router";


export default function Profile2({ profile }) {


    //const router = useRouter()
    //console.log(profile)

    return (
        <>
            
            <div className="w-full h-[100vh] box-shadow p-3 bg-gray-300 text-white pt-20">
                
                <br />
                <div className="w-full h-[30vh] bg-purple-900 relative mb-[60px] rounded-2xl" >
                    <div className="capitalize m-3 text-3xl absolute left-0 right-0 text-center top-[30%]">{profile.occupation}</div>
                    <div className="flex border-custom   items-center justify-center w-[110px] h-[110px] rounded-full bottom-[-50px] absolute left-0 right-0 place-items-center m-auto">
                        <img src={profile.image} alt="" className="w-[100px] h-[100px] rounded-full " />
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white text-black p-5 rounded-2xl py-10 mt-[-50px]">
                    <div className="text-3xl font-semibold uppercase m-1">{profile.name}</div>
                    <div className="capitalize m-3">
                        {profile.email}
                    </div>
                    <div className="text-center m-3">{profile.bio}</div>
                    <div>{profile.phone}</div>
                    
                    <a href={profile.slug} className="bg-purple-900 text-white w-1/2  p-2 m-3 rounded-lg text-center">More</a>

                    <div className="flex gap-3 my-5">
                    
                        {profile.twitter && <div className="w-[10vh] h-[10vh] rounded-full bg-purple-900 flex justify-center items-center">
                            <a href={profile.twitter} className='text-white'>Twitter</a>
                        </div>}
                        {profile.instagram && <div className="w-[10vh] h-[10vh] rounded-full bg-purple-900 flex justify-center items-center">
                            <a href={profile.instagram} className='text-white'>Insta</a>
                        </div>}
                        {profile.linkedin && <div className="w-[10vh] h-[10vh] rounded-full bg-purple-900 flex justify-center items-center">
                            <a href={profile.instagram} className='text-white'>Lindn</a>
                        </div>}
                    </div>

                    
                </div>
            </div>
            
      </>
    )
  }