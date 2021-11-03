import React, { createRef, useState } from 'react';
import Card from './Card';
import styles from '../styles/Carousel.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ applicants }) {
    const [index, setIndex] = useState(0)

    const slideLeft = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
    };

    const slideRight = () => {
        if (index + 1 <= applicants.length - 1) {
            setIndex(index + 1);
        }
    };

    return (
        <div id='carousel' className={styles.carousel__container}>
            {applicants.map((applicant: any, index: number) => {
                let position = index > 0 ? 'nextCard' : index === 0 ?
                    'activeCard' : 'prevCard';
                if (position === 'activeCard')
                    return <Card key={index} applicant={applicant} style={position} />;
            })}
            <FontAwesomeIcon
                onClick={slideLeft}
                className='leftBtn'
                icon={faChevronLeft}
            />
            <FontAwesomeIcon
                onClick={slideRight}
                className='rightBtn'
                icon={faChevronRight}
            />
        </div>
    )
}