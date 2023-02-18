
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
import Card1 from "../components/cards/card1";
import { useState } from "react";
import Profile1 from "../components/profiles/Profile1";
import Profile2 from "../components/profiles/Profile2";
import { AiOutlineShareAlt, AiOutlineSwap } from "react-icons/ai";
import dynamic from "next/dynamic"
//const CC = dynamic(() => import("../components/buttons/CoppyBtn").then(mod => mod.CopyClipboard), { ssr: false })

export default function GetCardComp({ }) {
  const [type, setType] = useState(1000)
  const router = useRouter();
  const data = router.query;

  const swipeData = () => {
    if (type == 2000) setType(1000);
    if (type == 1000) setType(2000)
  }

   console.log(data, '--CARD--')

    return (
      <div className="flex flex-col items-center  p-5 mt-20">

        {
          type == 2000 && <Profile1 profile={data} />
        }
        {
          type == 1000 && <Profile2 profile={data}/>
        }
        
        


        
        
        <button onClick={swipeData} className='flex items-center justify-center fixed bottom-5 p-4 header_div text-gray-900 rounded-full w-[80px] h-[80px] my-3 right-5'><AiOutlineSwap size={30}/></button>
        <button onClick={() => {
          window.alert('Copied')
          navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_DEFAULT_URL == undefined&&'https://cardsio.vercel.app/'}/profile?id=${data.id}&type=${type}`)
        }}
          className='flex items-center justify-center fixed bottom-5 p-4 header_div text-gray-900 rounded-full w-[80px] h-[80px] my-3 left-5'><AiOutlineShareAlt size={30} /></button>
      </div>
    )
}