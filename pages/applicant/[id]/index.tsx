import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { environment } from '../../../config'

const Applicant = ({ applicant }) => {
    return (
        <div>
            <h1>
                {applicant.name.first}
            </h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
    const response = await fetch(`${environment}/api/applicants`);
    let applicants: any[];
    await response.json().then(r => applicants = r);
    const applicant = applicants[id.toString()];

    return {
        props: {
            applicant
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`${environment}/api/applicants`);
    const applicants = await response.json();
    const ids: number[] = [];
    applicants.forEach((_: any, index: number) => {
        ids.push(index);
    })
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default Applicant;