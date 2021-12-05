import React, { ReactElement } from 'react';
import statsStyles from '../styles/Stats.module.scss';
import TooltipComponent from './Tooltip.component';
import { useMediaQuery } from 'react-responsive'

function StatsComponent(): ReactElement {
    const desktopScreen = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <div className={statsStyles.stats}>
            <TooltipComponent message="This percentage is probably accurate." direction={desktopScreen ? 'left' : 'bottom'}>
                <div className={statsStyles.stats__stat}>
                <span className={statsStyles.stats__stat__number}>
                    97%
                </span>
                    satisfaction rate
                </div>
            </TooltipComponent>
            <TooltipComponent message="Terms and conditions apply." direction={desktopScreen ? 'left' : 'bottom'}>
                <div className={statsStyles.stats__stat}>
                    at least
                    <span className={statsStyles.stats__stat__number}>
                    1
                </span>
                    hire per visit
                </div>
            </TooltipComponent>
        </div>
    );
}

export default StatsComponent;