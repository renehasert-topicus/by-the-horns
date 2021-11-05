import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name='keywords' content={keywords} />
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'byTheHorns()',
  keywords: 'web developers, react, javascript, programmers',
  description: `grab('yourNewEmployee')`,
}

export default Meta