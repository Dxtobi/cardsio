import { Url } from "url"

export interface Session {
    user: {
        email: string,
        name: string,
        image: string
    },
    id:string,
    expires: string,
    sessionToken:string
}