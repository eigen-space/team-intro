module.exports = {
    siteMetadata: { title: 'Team intro' },
    plugins: [
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: { name: 'main', path: `${__dirname}/src/assets/content` }
        },
        'gatsby-transformer-remark'
    ]
};
