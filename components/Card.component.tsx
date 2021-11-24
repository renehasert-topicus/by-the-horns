import styles from '../styles/Card.module.scss';
import Link from 'next/link'
import { urlFor } from '../lib/sanity';

function CardComponent({ applicant, index }) {
    return (
        <Link href={{
            pathname: '/applicant/[id]',
            query: { id: index },
        }}>
            <div className={styles.card}>
                <div className={styles.card__picture}>
                    <img src={urlFor(applicant?.image).url()} alt={`${applicant.name}`} />
                    <h2>{`${applicant.name}`}</h2>
                </div>
                <div>{'asdf'}</div>
            </div>
        </Link>
    )
}

export default CardComponent;