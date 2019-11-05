/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'ThinkBucket',
  tagline: 'The tagline of my site',
  url: 'https://thinkbucket.github.io',
  baseUrl: '/docsite/',
  favicon: 'https://avatars1.githubusercontent.com/u/53037732?s=70&v=4',
  organizationName: 'ThinkBucket', // Usually your GitHub org/user name.
  projectName: 'docsite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ThinkBucket',
      logo: {
        alt: 'ThinkBucket Logo',
        src: 'https://avatars1.githubusercontent.com/u/53037732?s=70&v=4',
      },
      links: [
        {to: 'docs/javascript/preface/overview', label: 'Javascript', position: 'left'},
        {to: 'docs/css/preface/overview', label: 'CSS', position: 'left'},
        {to: 'docs/web/preface/overview', label: 'Web', position: 'left'},
        {to: 'docs/react/preface/overview', label: 'React Stack', position: 'left'},
        {to: 'docs/design-patterns/preface/overview', label: 'Design Patterns', position: 'left'},
        {to: 'docs/algorithm/preface/overview', label: 'Algorithm', position: 'left'},
        {to: 'docs/doc1', label: 'Docs', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/ThinkBucket/docsite',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              html:
                '<iframe src="https://ghbtns.com/github-btn.html?user=thinkbucket&repo=docsite&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>',
            }
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} ThinkBucket.`,
    },
    prismTheme: require('prism-react-renderer/themes/nightOwl'),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ThinkBucket/docsite/edit/master/docs/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
