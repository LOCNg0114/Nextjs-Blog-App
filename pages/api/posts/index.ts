import data from "@/utils/data";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

export default async function hanlder(req: NextApiRequest, res: NextApiResponse){
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
    const { Posts } = data;
    if (Posts) return res.status(200).json(Posts);

    return res.status(404).json({ error : "Posts Data Not Found"})
}