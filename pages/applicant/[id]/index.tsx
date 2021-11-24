import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { sanityClient } from '../../../lib/sanity.server';
import { applicantByIndexQuery, applicantsQuery } from '../../../queries/applicants.query';
import { urlFor } from '../../../lib/sanity';
import NavComponent from '../../../components/Nav.component';
import PageLayoutComponent from '../../../components/PageLayout.component';
import { DateTime } from 'luxon';

const Applicant = ({ applicant }) => {
    const birthday = DateTime.fromSQL(applicant.birthday).toLocaleString(DateTime.DATE_FULL);
    return (
        <>
            <NavComponent/>
            <PageLayoutComponent title={applicant?.name}>
                <p>Birthday: {birthday}</p>
                <img src={urlFor(applicant?.image).url()} alt={'Mugshot of ' + applicant?.name}/>
            </PageLayoutComponent>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params;
    const applicant = await sanityClient.fetch(applicantByIndexQuery(
        parseInt(id.toString(), 10)
    ));
    return {
        props: {
            applicant
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const applicants = await sanityClient.fetch(applicantsQuery);
    const ids = applicants.map((_applicant: any, index: number) => index);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: true
    };
};

export default Applicant;