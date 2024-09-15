import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Wyatt Smith',
  tagline: 'Thoughts, ideas, and other stuff',
  favicon: 'img/favicon.ico',
  url: 'https://ws998116.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ws998116', // Usually your GitHub org/user name.
  projectName: 'ws998116.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,
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
      {
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: '/img/social.jpg',
    metadata: [{ content: "Wyatt Smith's personal website with thoughts, ideas, and other stuff." }],
    navbar: {
      logo: {
        alt: 'Y',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ws998116/ws998116.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        src: 'img/logo.svg',
        alt: 'Y',
        height: 50,
      },
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
