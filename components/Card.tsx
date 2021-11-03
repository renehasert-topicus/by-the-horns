import styles from '../styles/Card.module.scss';
import Hammer from 'react-hammerjs';

export default function Card({ applicant, style }) {
    const handleSwipe = () => {
        console.log('swipe')
    }
    return (
        <>
            <Hammer onSwipe={handleSwipe}>
                <div className={`${styles.card} ${styles[style]}`}>
                    <img src={applicant.picture.large} alt={`${applicant.name.first} ${applicant.name.last}`} />
                    <h2>{`${applicant.name.first} ${applicant.name.last}`}</h2>
                    <h4>Solid developer</h4>
                </div>
            </Hammer>
        </>
    )
}