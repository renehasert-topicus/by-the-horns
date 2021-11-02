const fetchApplicants = async () => {
    const response = await fetch('https://randomuser.me/api/?results=25');
    const applicants = await response.json();
    return applicants.results;
}

export default async function handler(req, res) {
    await fetchApplicants().then(a => res.status(200).json(a));
}