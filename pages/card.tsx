
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
import Card1 from "../components/cards/card1";


export default function GetCardComp({ }) {
  
  const router = useRouter();
  const data = router.query;

   //console.log(data, '--CARD--')

    return (
      <div className="flex flex-col items-center  p-5 mt-20">
        <Card1 profile={data} /> 
      </div>
    )
}