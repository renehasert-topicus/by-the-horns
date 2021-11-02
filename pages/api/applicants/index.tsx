import { NextApiRequest, NextApiResponse } from "next";

let applicants;

export const fetchApplicants = async () => {
    if (!applicants) {
        const response = await fetch('https://randomuser.me/api/?results=25');
        applicants = response.json();
        return applicants;
    } else {
        return applicants;
    }
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    await fetchApplicants().then(a => res.status(200).json(a));
}