import homeStyles from '../styles/Home.module.scss';
import React, { ReactElement } from 'react';
import HeroComponent from '../components/Hero.component';
import ActionWallComponent from '../components/ActionWall.component';
import TestimonialsComponent from '../components/Testimonials.component';
import NavComponent from '../components/Nav.component';
import { applicantsQuery } from '../queries/applicants.query';
import { GetStaticProps } from 'next';
import { sanityClient } from '../lib/sanity.server';
import CarouselComponent from '../components/Carousel.component';
import { Applicant } from '../models/Applicant.model';

function Home({ applicants }: { applicants: Applicant[] }): ReactElement {
    return (
        <div id="home" className={homeStyles.container}>
            <NavComponent/>
            <HeroComponent>
                <TestimonialsComponent/>
                <ActionWallComponent/>
            </HeroComponent>
            <section id="carousel" style={{ height: '100rem', zIndex: -1 }}>
                <CarouselComponent applicants={applicants}/>
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

export default Home;
