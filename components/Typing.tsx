import typingStyles from '../styles/Typing.module.scss';
import React, { useEffect } from 'react';

export default function Typing() {
    let textElementRef: HTMLElement;
    const text = 'That can write cheesy effects...';
    const addText = ' and shit.';
    
    useEffect(() => {
        textElementRef = document.getElementById('typingText');
        if (!textElementRef.style.width) {
            textElementRef.style.width = `${text.length}ch`;
        }
        
        setTimeout(() => {
            const widthInterval = setInterval(() => {
                const width = textElementRef.style.width;

                if (width === `${(addText.length + text.length) - 1}ch`) {
                    clearInterval(widthInterval);
                }
                
                textElementRef.style.width = `${parseInt(width.replace(/\D+/g, '')) + 1}ch`;
            }, 100);

        }, 6000);
    }, [textElementRef]);
    
    return (
        <div className={typingStyles.typing}>
            <div id={'typingText'} className={typingStyles.typing__text}>
                {text}{addText}
            </div>
        </div>
    );
}