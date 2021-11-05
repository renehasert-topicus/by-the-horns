import styles from '../styles/Card.module.scss';
import Link from 'next/link'

export default function Card({ applicant, index }) {
    return (
        <Link href={{
            pathname: '/applicant/[id]',
            query: { id: index },
        }}>
            <div className={styles.card}>
                <div className={styles.card__picture}>
                    <img src={applicant.picture.large} alt={`${applicant.name.first} ${applicant.name.last}`} />
                    <h2>{`${applicant.name.first} ${applicant.name.last}`}</h2>
                </div>
            </div>
        </Link>
    )
}