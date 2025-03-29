import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {QRCodeSVG} from 'qrcode.react';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <QRCodeSVG
          value={siteConfig.url}
          title={"扫码访问文档"}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          imageSettings={{
            src: siteConfig.favicon,
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            opacity: 1,
            excavate: true,
          }}
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速上手
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`快速上手${siteConfig.title}`}
      description="为JetBrains AI的中国用户设计的上手指南">
      <HomepageHeader />
    </Layout>
  );
}
