import data from "@/utils/data";
import { NextApiRequest, NextApiResponse } from "next";

export default function hanlder(req: NextApiRequest, res: NextApiResponse){
    const { Posts } = data;
    if (Posts) return res.status(200).json(Posts);

    return res.status(404).json({ error : "Posts Data Not Found"})
}