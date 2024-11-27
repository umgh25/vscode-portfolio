module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**', // Autoriser toutes les sous-routes
      },
    ],
  },
};
