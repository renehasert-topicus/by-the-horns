import { GetStaticPaths, GetStaticProps } from 'next';
import React, { ReactElement } from 'react';
import { sanityClient } from '../../../lib/sanity.server';
import { applicantByIndexQuery, applicantsQuery } from '../../../queries/applicants.query';
import { urlFor } from '../../../lib/sanity';
import NavComponent from '../../../components/Nav.component';
import PageLayoutComponent from '../../../components/PageLayout.component';
import { DateTime } from 'luxon';
import { Applicant } from '../../../models/Applicant.model';

const Applicant = ({ applicant }: { applicant: Applicant }): ReactElement => {
    const birthday = DateTime.fromSQL(applicant?.birthday).toLocaleString(DateTime.DATE_FULL);
    const imageSource = urlFor(applicant?.image).url() || undefined;
    
    return (
        <>
            <NavComponent/>
            <PageLayoutComponent title={applicant?.name}>
                <p>Birthday: {birthday}</p>
                <img src={imageSource} alt={'Mugshot of ' + applicant?.name}/>
            </PageLayoutComponent>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }: { [_key: string]: any; }) => {
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
    const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: true
    };
};

export default Applicant;