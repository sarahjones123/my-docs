// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'nGenue Knowledge Base',
  tagline: 'End-to-end wholesale and retail solution for natural gas operations',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sarahjones123.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sarahjones123', // Usually your GitHub org/user name.
  projectName: 'my-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8, // ✅ fixed here
      },
    ],
  ],

/*
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],

  */
  
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'nGenue',
      logo: {
        alt: 'nGenue Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: 'Guides',
          position: 'left',
          to: '/docs/intro',
        },
        {
          label: 'API Reference',
          position: 'left',
          to: '/docs/intro',
        },
        {
          label: 'Support',
          position: 'left',
          to: '/docs/testimonials',
        },
        {
          label: 'Resources',
          position: 'left',
          type: 'dropdown',
          items: [
            {
              label: 'Community',
              href: 'https://ngenue.com/community',
            },
            {
              label: 'Events',
              href: 'https://ngenue.com/blogevents/',
            },
            {
              label: 'Roadmap',
              href: 'https://ngenue.com/roadmap',
            },
          ],
        },
      ],
      hideOnScroll: false,
    },
    // Enable basic search functionality
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Customer Management',
              to: '/docs/customer-management/overview',
            },
            {
              label: 'Billing',
              to: '/docs/billing/overview',
            },
            {
              label: 'ETRM',
              to: '/docs/etrm/overview',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'nGenue Website',
              href: 'https://ngenue.com',
            },
            {
              label: 'Customer Testimonials',
              to: '/docs/testimonials',
            },
            {
              label: 'Events & News',
              href: 'https://ngenue.com/blogevents/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Video Demo',
              href: 'https://www.youtube.com/watch?v=HnG4dtuIkmE',
            },
            {
              label: 'Knowledge Base',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} nGenue. Your best choice for wholesale and retail natural gas operations.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
