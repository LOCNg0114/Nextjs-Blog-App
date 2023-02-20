
import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../utils/data';
import NextCors from 'nextjs-cors';
// api/trending
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
    const { Trending } = data;
    if(Trending) return res.status(200).json(Trending)
    return res.status(404).json({ error: "Trending Data Not Found"})
}