import { NextApiRequest, NextApiResponse } from "next";


export const fetchApplicants = async () => {
    const response = await fetch('https://randomuser.me/api/?results=25');
    return response.json();
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    await fetchApplicants().then(a => res.status(200).json(a));
}