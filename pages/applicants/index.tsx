import NavComponent from '../../components/Nav.component';
import PageLayoutComponent from '../../components/PageLayout.component';
import React, { ReactElement } from 'react';

function Applicants(): ReactElement {
    return (
        <>
            <NavComponent/>
            <PageLayoutComponent title={"All applicants"}>
                Applicants go here
            </PageLayoutComponent>
        </>
    );
}

export default Applicants;
