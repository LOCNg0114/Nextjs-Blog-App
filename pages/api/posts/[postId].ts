import data from "@/utils/data";
import { NextApiRequest, NextApiResponse } from "next";

// api/posts/1
export default function handler(req: NextApiRequest, res: NextApiResponse){
    const { postId } = req.query;
    const { Posts }  = data;

    if(postId){
        const post = Posts.find( (value: any) => value.id == postId)
        return res.status(200).json(post)
    }

    return res.status(404).json({ error : "Post Not Found"})

}