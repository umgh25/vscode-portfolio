import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  // Thème valide pour GitHubCalendar
  const theme = {
    dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'], // 5 couleurs pour le thème sombre
    light: ['#ebedf0', '#c6e48b'], // Minimum requis pour le thème clair
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
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
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
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
    );
    console.log(`User response status: ${userRes.status}`); // Ajout pour voir le statut de la réponse

    if (!userRes.ok) {
      const errorText = await userRes.text(); // Lire le message d'erreur
      throw new Error(`Failed to fetch user: ${userRes.status} - ${errorText}`);
    }

    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=created_at&per_page=10`
    );
    console.log(`Repo response status: ${repoRes.status}`); // Ajout pour voir le statut des repos

    if (!repoRes.ok) {
      const errorText = await repoRes.text(); // Lire le message d'erreur
      throw new Error(`Failed to fetch repositories: ${repoRes.status} - ${errorText}`);
    }

    const repos = await repoRes.json();

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error.message);
    return {
      props: { title: 'GitHub', repos: [], user: null },
    };
  }
}

export default GithubPage;
