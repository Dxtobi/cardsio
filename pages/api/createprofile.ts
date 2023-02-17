import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next/types';

const prisma = new PrismaClient()
export default async function (req:NextApiRequest, res:NextApiResponse) {
    try {
        const {
            name,
            email,
            phone,
            twitter,
            linkedin,
            facebook,
            instagram,
            bio,
            image,
            occupation,
            slug
        } = req.body
        const session = await getSession({ req });
        if (!session) {
            return res.status(401).json({message:'not login'})
        }
        interface User {
            email: string;
          }
        const sessionUser = session?.user as User;
        
       // prisma.$connect()
        const profile = await prisma.profile.create({
            data: {
                name,
                email:email.toLowerCase(),
                phone,
                twitter,
                linkedin,
                facebook,
                instagram,
                bio,
                occupation,
                image,
                slug,
                user: {connect: {email: sessionUser?.email}}
            }
        });
       // prisma.$disconnect()
        return res.status(200).json(profile)
        
    } catch (error) {
        console.log('create-profile-api line 50',error)
        return res.status(500).send({message:'error ',})
    }
}