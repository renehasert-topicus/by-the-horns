import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { fetchApplicants } from '../../api/applicants';

const Applicant = ({ applicant }) => {
    return (
        <div>
            <h1>
                {applicant?.name?.first}
            </h1>
            <img src={applicant?.picture?.large} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
    const applicants = await fetchApplicants();
    const applicant = applicants.results[id.toString()];
    return {
        props: {
            applicant
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const applicants = await fetchApplicants();
    const ids = applicants.results.map((a: any, i: number) => i)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Applicant;