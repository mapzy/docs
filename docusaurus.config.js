// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Load env variables from .env file
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mapzy Docs',
  tagline: 'Docs for Mapzy',
  url: 'https://docs.mapzy.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'shafy',
  projectName: 'mapzy-docs',
  scripts: [
    {src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.mapzy.io'},
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mapzy/mapzy/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY,
        appId: process.env.ALGOLIA_APP_ID,
        indexName: process.env.ALGOLIA_INDEX_NAME
      },
      navbar: {
        title: 'Mapzy Docs',
        logo: {
          alt: 'Mapzy Logo',
          src: 'img/mapzy_logo.png',
        },
        items: [
          {
            href: 'https://github.com/mapzy/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mapzy',
            items: [
              {
                label: 'About',
                to: 'https://mapzy.io',
              },
              {
                label: 'Create an Account',
                to: 'https://app.mapzy.io/account/register',
              },
              {
                label: 'Sign in',
                to: 'https://app.mapzy.io/account/login',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '@SagGpt',
                to: 'https://twitter.com/SagGpt',
              },
              {
                label: '@canolcer',
                to: 'https://twitter.com/canolcer',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mapzy/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mapzy. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
