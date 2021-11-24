import NavComponent from '../../components/Nav.component';
import PageLayoutComponent from '../../components/PageLayout.component';
import React from 'react';

export default function GetHired() {
    return (
        <>
            <NavComponent/>
            <PageLayoutComponent title={"Hello again, René"}>
                <p>Getting desperate, eh?</p>
                <p>Don't give up, mate. You will get hired at some point. Just keep at it!</p>
                <p>Remember, I love you and I'm proud of you, no matter what.</p>
                <p>XOXO, yourself</p>
            </PageLayoutComponent>
        </>
    );
}