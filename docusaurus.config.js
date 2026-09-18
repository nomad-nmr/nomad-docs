// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

//@type {import('@docusaurus/types').Config} */
const config = {
  title: 'NOMAD',
  tagline: 'Smart and complete solution for NMR laboratory data management',
  url: 'https://nomad-nmr.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nomad-nmr', // Usually your GitHub org/user name.
  projectName: 'nomad-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Both plugins append their own content folder ('docs/', 'blog/') to this
          // base, so it points at the repo root rather than at docs/ or blog/.
          editUrl: 'https://github.com/nomad-nmr/nomad-docs/edit/main/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/nomad-nmr/nomad-docs/edit/main/'
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
          src: 'img/logo-round.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'whitepaper',
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
      }
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       items: [
      //         {
      //           html: `
      //           <div style="text-align: center">
      //           Icons made by
      //           <a href='https://www.freepik.com' title='Freepik'>
      //             Freepik
      //           </a>
      //           ,
      //           <a href="https://www.flaticon.com/authors/vectorsmarket15" title="vectorsmarket15">vectorsmarket15</a>
      //           and
      //           <a href='https://www.flaticon.com/authors/monkik' title='monkik'>
      //             monkik
      //           </a>
      //           from
      //           <a href='https://www.flaticon.com/' title='Flaticon'>
      //             www.flaticon.com
      //           </a>
      //           | Website build with
      //           <a href='https://docusaurus.io/' title='Docusaurus'>
      //             Docusaurus
      //           </a>
      //         </div>
      //         `
      //         }
      //       ]
      //     }
      //   ]

      //   // prism: {
      //   //   theme: lightCodeTheme,
      //   //   darkTheme: darkCodeTheme
      //   // }
      // }
    })
}

module.exports = config
