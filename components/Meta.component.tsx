import Head from 'next/head';
import { ReactElement } from 'react';

function MetaComponent({
                           title,
                           keywords,
                           description
                       }: { title: string, keywords: string, description: string }): ReactElement {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
}

MetaComponent.defaultProps = {
    title: 'byTheHorns()',
    keywords: 'web developers, react, javascript, programmers',
    description: `grab('yourNewEmployee')`,
};

export default MetaComponent;