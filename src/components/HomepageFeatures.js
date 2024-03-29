import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Monitoring Dashboard',
    Svg: require('../../static/img/monitor.svg').default,
    description: (
      <ul className={styles.featureList}>
        <li className={styles.featureImplemented}>IconNMR status and history in one place</li>
        <li className={styles.featureImplemented}>Permanent and searchable IconNMR history</li>
        <li className={styles.featureImplemented}>Central database of users and experiments</li>
        <li className={styles.featureImplemented}>Experimental time accounting</li>
        <li className={styles.featurePlanned}>Cryogen levels</li>
      </ul>
    )
  },
  {
    title: 'Submission Portal',
    Svg: require('../../static/img/submit.svg').default,
    description: (
      <ul className={styles.featureList}>
        <li className={styles.featureImplemented}>
          Improved and centrally controlled NMR lab traffic
        </li>
        <li className={styles.featureImplemented}>Batch/rack submission</li>
        <li className={styles.featureImplemented}>Correct provenance meta data assured</li>
      </ul>
    )
  },
  {
    title: 'Data Storage',
    Svg: require('../../static/img/data-storage.svg').default,
    description: (
      <ul className={styles.featureList}>
        <li className={styles.featureImplemented}>Automatic upload and storage of NMR datasets</li>
        <li className={styles.featureImplemented}>Search datasets using various metadata</li>
        <li className={styles.featureImplemented}>Data ownership and access control</li>
      </ul>
    )
  },
  {
    title: 'NMR Lab Notebook',
    Svg: require('../../static/img/notebook.svg').default,
    description: (
      <ul className={styles.featureList}>
        <li className={styles.featureImplemented}>
          Selecting and reorganising data for publication
        </li>
        <li className={styles.featureImplemented}>
          <a href='https://www.nmrium.org/' target='_blank'>
            NMRium
          </a>{' '}
          embedded for viewing and processing data
        </li>
        <li className={styles.featureImplemented}>
          Adding addtional metadata and data (molecular structures, assigments ...)
        </li>
        <li className={styles.featureImplemented}>Sharing data with other users</li>
      </ul>
    )
  },
  {
    title: 'Decentralised Data Repository',
    Svg: require('../../static/img/distributed.svg').default,
    description: (
      <ul className={styles.featureList}>
        <li className={styles.featurePlanned}>
          Repository created and maintained by community of NOMAD users
        </li>
        <li className={styles.featurePlanned}>
          Local NMR data management systems can share resources to create P2P network of nodes
        </li>
        <li className={styles.featurePlanned}>
          Preserving, sharing and publishing data without a server controled by central authority
        </li>
      </ul>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className={clsx('row', styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
