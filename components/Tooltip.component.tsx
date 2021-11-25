import React, { ReactElement, useState } from "react";
import tooltipStyles from "../styles/Tooltip.module.scss";

interface TooltipProps {
    message: string,
    children?: ReactElement | ReactElement[],
    direction?: string,
    delay?: number
}

function TooltipComponent(
    {
        children,
        direction = 'left',
        message,
        delay = 200
    }: TooltipProps): ReactElement {
    const [active, setActive] = useState(false);
    let timeout: NodeJS.Timeout;
    const directionClassName = `tooltip__message__${direction}`;

    const showTooltip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay);
    };

    const hideTooltip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className={tooltipStyles.tooltip}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {active && (
                <div className={`${tooltipStyles.tooltip__message} ${tooltipStyles[directionClassName]}`}>
                    {message}
                </div>
            )}
        </div>
    );
}

export default TooltipComponent;