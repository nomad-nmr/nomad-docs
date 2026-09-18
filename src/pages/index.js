import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

import HomepageFeatures from '../components/HomepageFeatures'
import Subscribe from '../components/Subscribe'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Credits from '../components/Credits'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Logo />
      <div className='container'>
        <Title />
        <h2>
          <span style={{ color: 'red' }}>N</span>
          MR
          <span style={{ color: 'yellow', marginLeft: 8 }}>O</span>
          nline
          <span style={{ color: 'green', marginLeft: 8 }}>M</span>
          anagment
          <span style={{ color: 'blue', marginLeft: 8 }}>A</span>
          nd
          <span style={{ color: 'purple', marginLeft: 8 }}>D</span>
          atastore
        </h2>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttonsTwo}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/getting-started/server-installation/'
          >
            Get Started
          </Link>
        </div>
      </div>
      <Logo />
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} - Documentation`}
      description='NOMAD - NMR Online Management And Datastore - Documentation website'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <ul className={styles.legend}>
          Legend:
          <li className={styles.featureImplemented}>Implemented feature</li>
          <li className={styles.featurePlanned}>Feature on the road map</li>
        </ul>
        <TestimonialsCarousel />

        <Subscribe />

        <Credits />
      </main>
    </Layout>
  )
}
