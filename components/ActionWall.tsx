import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import actionWallStyles from '../styles/ActionWall.module.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ActionWall() {

    const handleChevronClick = (event: React.MouseEvent) => {
        event.preventDefault;
        let carousel = document.getElementById("carousel");
        carousel && carousel.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className={actionWallStyles.actionWall}>
            <div className={actionWallStyles.actionWall__buttons}>
                <div className={actionWallStyles.actionWall__buttons__button}>Hire</div>
                <div className={actionWallStyles.actionWall__buttons__button}>Get hired</div>
            </div>
            <div onClick={e => handleChevronClick(e)} className={actionWallStyles.actionWall__chevron}>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    )
}