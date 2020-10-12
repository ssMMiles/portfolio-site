import styles from '../styles/components/Footer.module.css'

import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <div className={styles.footer}>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="https://twitter.com/ssMMiles" bgColor='#212121' fgColor='#FFF'/>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="https://www.linkedin.com/in/miles-moonlove-427769164" bgColor='#212121' fgColor='#FFF'/>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="https://github.com/ssMMiles" bgColor='#212121' fgColor='#FFF'/>
          <SocialIcon className={styles.social_icon} rel="noopener noreferrer" target="_blank" url="mailto:business@milesmoonlove.com" bgColor='#212121' fgColor='#FFF'/>
        </div>
    )
}