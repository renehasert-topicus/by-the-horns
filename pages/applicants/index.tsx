import NavComponent from '../../components/Nav.component';
import PageLayoutComponent from '../../components/PageLayout.component';
import React from 'react';

export default function Applicants() {
    return (
        <>
            <NavComponent/>
            <PageLayoutComponent title={"All applicants"}>
                Applicants go here
            </PageLayoutComponent>
        </>
    );
}
