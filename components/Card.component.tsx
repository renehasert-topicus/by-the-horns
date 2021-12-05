import styles from '../styles/Card.module.scss';
import Link from 'next/link'
import { urlFor } from '../lib/sanity';
import { Applicant } from '../models/Applicant.model';
import { ReactElement } from 'react';

function CardComponent({ applicant, index }: {applicant: Applicant, index: number }): ReactElement {
    const imageSource = urlFor(applicant?.image).url() || undefined;
    
    return applicant && (
        <Link href={{
            pathname: '/applicant/[id]',
            query: { id: index },
        }}>
            <div className={styles.card}>
                <div className={styles.card__picture}>
                    <img src={imageSource} alt={`${applicant.name}`} />
                    <h2>{`${applicant.name}`}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CardComponent;