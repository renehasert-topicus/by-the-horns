import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import actionWallStyles from '../styles/ActionWall.module.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function ActionWallComponent() {

    const handleChevronClick = (event: React.MouseEvent) => {
        event.preventDefault();
        
        let carousel = document.getElementById("carousel");
        
        carousel && carousel.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className={actionWallStyles.actionWall}>
            <div className={actionWallStyles.actionWall__buttons}>
                <Link href={'#carousel'}>
                <div className={actionWallStyles.actionWall__buttons__button}>
                    Hire
                </div>
                </Link>
                <Link href={'/get-hired'}>
                    <div  className={actionWallStyles.actionWall__buttons__button}>
                        Get hired
                    </div>
                </Link>
            </div>
            <div onClick={e => handleChevronClick(e)} className={actionWallStyles.actionWall__chevron}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    )
}

export default ActionWallComponent;