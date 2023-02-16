import { PrismaClient } from '@prisma/client';
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
//import { PrismaClient}
//import prisma from "../../../lib/prismadb"
const prisma = new PrismaClient()
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    ],
    callbacks: {
      session({ session, token, user }) {
          console.log('session:::', session)
          console.log('token:::', token)
          console.log('user:::', user)

          return session // The return type will match the one returned in `useSession()`
        },
      },
})