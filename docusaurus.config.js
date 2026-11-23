// @ts-check
// Note: type annotations allow type checking and IDE IntelliSense

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Knowledge Base',
  tagline: 'Everything I learn about creating stuff with AI',
  favicon: 'img/favicon.ico',

  url: 'https://your-github-username.github.io',
  baseUrl: '/ai-knowledge-base/',

  organizationName: 'egel', // GitHub org/user
  projectName: 'ai-knowledge-base', // repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/egel/ai-knowledge-base/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AI Knowledge Base',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'autoSidebar',
            position: 'left',
            label: 'Knowledge',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/egel/ai-knowledge-base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} AI Knowledge Base. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
