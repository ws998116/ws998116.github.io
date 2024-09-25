import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'

import styles from './index.module.scss'
import { useEffect, useRef, useState } from 'react'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  const mainRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536)
  const [bannerHeight, setBannerHeight] = useState(256)

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight)
    setHeaderHeight(tempHeaderHeight)
    setBannerHeight(Math.max(256, tempHeaderHeight / 2))
    setIsLoading(false)
    // mainRef.current.hidden = false
  }, [])

  return (
    <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
      <div
        className={styles.heroBannerWrapper}
        style={{
          minHeight: bannerHeight,
          display: isLoading ? 'none' : 'block',
        }}
      >
        <h1>Hi, I'm Wyatt Smith</h1>
        <h4 className={styles.first}>Software Engineer</h4>
        <h4 className={styles.second}>Product Developer</h4>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  )
}
