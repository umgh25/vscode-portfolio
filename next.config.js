module.exports = {
  webpack(config, { isServer }) {
    config.stats = 'verbose';  // Cela vous donnera plus de détails sur l'erreur dans les logs.
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'imgur.com' },
    ],
  },
};
