import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username="umgh25"
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    // Récupérer les informations utilisateur
    const userRes = await fetch(
      `https://api.github.com/users/umgh25`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    if (!userRes.ok) {
      console.error(`Erreur lors de la récupération de l'utilisateur : ${userRes.status}`);
      return {
        props: { title: 'GitHub', repos: [], user: {} },
        revalidate: 10,
      };
    }
    const user = await userRes.json();

    // Récupérer les dépôts
    const repoRes = await fetch(
      `https://api.github.com/users/umgh25/repos?per_page=10`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    if (!repoRes.ok) {
      console.error(`Erreur lors de la récupération des dépôts : ${repoRes.status}`);
      return {
        props: { title: 'GitHub', repos: [], user },
        revalidate: 10,
      };
    }

    let repos = await repoRes.json();

    // Vérifier que "repos" est un tableau avant de trier et découper
    if (Array.isArray(repos)) {
      repos = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10);
    } else {
      console.error('La réponse reçue pour "repos" n’est pas un tableau.');
      repos = [];
    }

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return {
      props: { title: 'GitHub', repos: [], user: {} },
      revalidate: 10,
    };
  }
}

export default GithubPage;
