import data from "@/utils/data";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

// api/posts/1
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
    const { postId } = req.query;
    const { Posts }  = data;

    if(postId){
        const post = Posts.find( (value: any) => value.id == postId)
        return res.status(200).json(post)
    }

    return res.status(404).json({ error : "Post Not Found"})

}