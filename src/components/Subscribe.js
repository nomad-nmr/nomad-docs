import React from 'react'

import styles from './Subscribe.module.css'
import discordLogo from '../../static/img/discord-logo.png'
import emailIcon from '../../static/img/email.png'

const Subscribe = () => {
  return (
    <div className={styles.SubscribeContainer}>
      <h1>Contact us</h1>
      <a href='mailto:nomad@st-andrews.ac.uk'>
        <img src={emailIcon} alt='Email Icon' width='40' />
      </a>
      <a href='https://discord.gg/YxwFuCJeJ9'>
        <img src={discordLogo} alt='Discord Logo' />
      </a>
    </div>
  )
}

export default Subscribe
