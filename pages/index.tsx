import homeStyles from '../styles/Home.module.scss';
import React from 'react';
import HeroComponent from '../components/Hero.component';
import ActionWallComponent from '../components/ActionWall.component';
import TestimonialsComponent from '../components/Testimonials.component';
import NavComponent from '../components/Nav.component';
import { applicantsQuery } from '../queries/applicants.query';
import { GetStaticProps } from 'next';
import { sanityClient } from '../lib/sanity.server';
import CarouselComponent from '../components/Carousel.component';

export default function Home({ applicants }) {
    return (
        <div id="home" className={homeStyles.container}>
            <NavComponent/>
            <HeroComponent>
                <TestimonialsComponent/>
                <ActionWallComponent/>
            </HeroComponent>
            <section id="carousel" style={{ height: '100rem' }}>
                <CarouselComponent applicants={applicants}></CarouselComponent>
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