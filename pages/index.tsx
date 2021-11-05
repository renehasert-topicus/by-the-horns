import { GetStaticProps } from 'next'
import homeStyles from '../styles/Home.module.scss'
import { fetchApplicants } from './api/applicants'
import React from 'react'
import Carousel from '../components/Carousel'
import Meta from '../components/Meta'

export default function Home({ applicants }) {
  return (
    <>
      <Meta />
      <div className={homeStyles.container}>
        <div className={homeStyles.container__hero}>
          <div className={homeStyles.container__hero__header}>
            Grab your React dev
          </div>
          <div className={homeStyles.container__hero__subHeader}>
            &amp; make 'm your bi... new employee!
          </div>
          <div className={homeStyles.container__hero__buttons}>
            <button>Hire!</button>
            <button>Get hired!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const applicants = await fetchApplicants();
  return {
    props: {
      applicants: applicants.results
    }
  }
}

