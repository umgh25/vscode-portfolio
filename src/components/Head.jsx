import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Usman Mughal est un développeur full stack passionné, créant des sites web et des applications que vous adorerez utiliser."
      />
      <meta
        name="keywords"
        content="usman mughal, usman, mughal, portfolio développeur web, usman développeur web, usman développeur, mern stack, portfolio usman mughal, vscode-portfolio"
      />
      <meta property="og:title" content="Portfolio Usman Mughal" />
      <meta
        property="og:description"
        content="Un développeur full-stack créant des sites web que vous aimerez utiliser."
      />
      <meta property="og:image" content="img à mettre" />
      <meta property="og:url" content="lien du site à mettre" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Usman Mughal',
};
