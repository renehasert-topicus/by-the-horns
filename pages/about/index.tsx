import React, { ReactElement } from "react";
import NavComponent from "../../components/Nav.component";
import PageLayoutComponent from "../../components/PageLayout.component";

function About(): ReactElement {
    return (
        <>
            <NavComponent/>
            <PageLayoutComponent title={"About"}>
                <h4>Looking for one ridiculously awe-/handsome React developer? Look no further!</h4>
                <p>We have several pictures of the same guy, with different skill sets. That means, all of those skill sets come with the one guy.</p>
                <p>All in one. Amazing. The guy too, superb. Such a hard worker, such enthusiasm. Great.</p>
            </PageLayoutComponent>
        </>
    );
}

export default About;
