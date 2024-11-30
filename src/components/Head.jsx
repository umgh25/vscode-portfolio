import Head from 'next/head';

const CustomHead = ({ title = 'Usman Mughal' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Usman Mughal est un développeur web passionné, créant des sites et des applications que vous allez adorer utiliser"
      />
      <meta
        name="keywords"
        content="usman, usman mughal, mughal, web developer, usman web developer, usman developer, mern stack, usman portfolio"
      />
    </Head>
  );
};

export default CustomHead;
