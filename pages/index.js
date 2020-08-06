import Meta from '../components/Meta.js'
import Background from '../components/Background.js'

import { SocialIcon } from 'react-social-icons';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Meta
        title="Miles Moonlove | Software Engineer"
        desc="Full-stack software engineer specializing in building resilient and scalable backend services."
        canonical="https://milesmoonlove.com"
      />
      <Background />
      <header className={styles.Home_desc}>
        <h3>
          This site is under construction. Please check back soon.
        </h3>
        <div className={styles.social_links}>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="https://twitter.com/ssMMiles" bgColor='#212121'/>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="https://www.linkedin.com/in/miles-moonlove-427769164" bgColor='#212121'/>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="https://github.com/sMMiles" bgColor='#212121'/>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="mailto:business@milesmoonlove.com" bgColor='#212121'/>
        </div>
      </header>
    </div>
  )
}
