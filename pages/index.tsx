import homeStyles from '../styles/Home.module.scss';
import React from 'react';
import Hero from '../components/Hero';
import ActionWall from '../components/ActionWall';
import Testimonials from '../components/Testimonials';
import Nav from '../components/Nav';
import { sanityClient } from '../lib/sanity.server';
import { urlFor } from '../lib/sanity';
import { GetStaticProps } from 'next';
import { Applicant } from '../models/Applicant.model';

const applicantsQuery = `* [_type == 'applicant']{
_id,
name,
birthday,
likability,
image,
stack,
additional
}`;

export default function Home({ applicants }) {
    return (
        <div className={homeStyles.container}>
            <Nav/>
            <Hero>
                <Testimonials/>
                <ActionWall/>
            </Hero>
            <section id="carousel" style={{ height: '100rem' }}>
                {applicants.map((a: Applicant) => {
                    return (<div key={a._id}>
                            <h2>{a.name}</h2>
                            <img src={urlFor(a.image).url()} height={100}/>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const applicants = await sanityClient.fetch(applicantsQuery);
    return {
        props: {
            applicants
        }
    };
};