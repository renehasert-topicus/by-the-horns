import typingStyles from '../styles/Typing.module.scss';
import React, { ReactElement, useEffect, useRef } from 'react';

function TypingComponent(): ReactElement {
    let textElementRef = useRef<HTMLDivElement | null>(null);
    const text = 'That can write cheesy effects...';
    const addText = ' and shit.';

    useEffect(() => {
        if (textElementRef && textElementRef.current) {
            if (!textElementRef.current.style.width) {
                textElementRef.current.style.width = `${text.length}ch`;
            }

            setTimeout(() => {
                const widthInterval = setInterval(() => {
                    const elWidth = textElementRef.current?.style.width;

                    if (elWidth === `${(addText.length + text.length) - 1}ch`) {
                        clearInterval(widthInterval);
                    }
                    if (elWidth && textElementRef && textElementRef.current) {
                        textElementRef.current.style.width = `${parseInt(elWidth.replace(/\D+/g, '')) + 1}ch`;
                    }
                }, 100);

            }, 6000);
        }
        // @ts-ignore
    }, [textElementRef]);

    return (
        <div className={typingStyles.typing}>
            <div ref={textElementRef} className={typingStyles.typing__text}>
                {text}{addText}
            </div>
        </div>
    );
}

export default TypingComponent;