// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NOMAD',
  tagline: 'Smart and complete solution for NMR laboratory data management',
  url: 'https://nomad-nmr.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nomad-nmr', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NOMAD',
        logo: {
          alt: 'NOMAD Logo',
          src: 'img/logo-round.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/nomad-nmr',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                <div style="text-align: center">
                Icons made by 
                <a href='https://www.freepik.com' title='Freepik'>
                  Freepik
                </a>
                ,
                <a href="https://www.flaticon.com/authors/vectorsmarket15" title="vectorsmarket15">vectorsmarket15</a>
                and 
                <a href='https://www.flaticon.com/authors/monkik' title='monkik'>
                  monkik
                </a>
                from 
                <a href='https://www.flaticon.com/' title='Flaticon'>
                  www.flaticon.com
                </a>
                | Website build with 
                <a href='https://docusaurus.io/' title='Docusaurus'>
                  Docusaurus
                </a>
              </div>
              `
              }
            ]
          }
        ]

        // prism: {
        //   theme: lightCodeTheme,
        //   darkTheme: darkCodeTheme
        // }
      }
    })
}

module.exports = config
