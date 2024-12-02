const AboutPage = () => {
  return (
    <>
      <h3>En savoir plus sur moi</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'À propos' },
  };
}

export default AboutPage;
