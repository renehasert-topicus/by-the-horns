import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import HeroComponent from '../components/Hero.component';
import ActionWallComponent from '../components/ActionWall.component';
import StatsComponent from '../components/Stats.component';
import NavComponent from '../components/Nav.component';
import CarouselComponent from '../components/Carousel.component';
import { applicantsQuery } from '../queries/applicants.query';
import { sanityClient } from '../lib/sanity.server';
import { Applicant } from '../models/Applicant.model';
import homeStyles from '../styles/Home.module.scss';

function Home({ applicants }: { applicants: Applicant[] }): ReactElement {
    return (
        <div id="home" className={homeStyles.container}>
            <NavComponent/>
            <HeroComponent>
                <StatsComponent/>
                <ActionWallComponent/>
            </HeroComponent>
            <section id="carousel" style={{ height: '100rem' }}>
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
