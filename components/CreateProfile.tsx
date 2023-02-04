
import axios, {AxiosRequestConfig} from "axios";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"

interface Value {
    name: string,
    email: string,
    phone: string,
    twitter?: string,
    linkedin?: string,
    facebook?: string,
    instagram?: string,
    bio: string,
    image?: string
}

export default function CreateProfile({user}) {

    const router = useRouter()
    
    const { register, handleSubmit } = useForm();
    
    const onSubmitForm = async (values: Value) => {
        try {
            values.image = user?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/createprofile",
                data: values,
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await axios(config)

            if (res.status === 200) {
                router.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full  ">
            <div className="w-full p-5">
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text'  {...register('name', { required: true })} placeholder="Name" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('occupation', { required: true })} placeholder="Occupation" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='email' value={user?.email} {...register('email', { required: true })} placeholder="email" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='tell' {...register('phone', { required: true })} placeholder="Phone Optional" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('twitter')} placeholder="twitter handle without @" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('linkedin')} placeholder="linkedin url" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('facebook')} placeholder="facebook url" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('instagram')} placeholder="instagram url" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('bio', { required: true })} placeholder="bio or skills" />
                    <input className="p-3 bg-gray-100 rounded-md w-full outline-none mb-2" type='text' {...register('slug')} placeholder="unique url" />
                    <button className="p-3 bg-gray-900 text-white rounded-md w-full outline-none mb-2" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    )
}