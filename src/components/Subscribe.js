import React from 'react'
import Mailchimp from 'react-mailchimp-form'

import styles from './Subscribe.module.css'
import mailingList from '../../static/img/mailinglist.png'

const Subscribe = () => {
  return (
    <div className={styles.SubscribeContainer}>
      <img src={mailingList} alt='Mailing List Img' />
      <div>
        <h1>Keep in touch!</h1>
        <p>Subscribe to receive news about updates straight into your inbox.</p>
        <Mailchimp
          action='https://nomad-nmr.us12.list-manage.com/subscribe/post?u=bd4565db2e8cf5149c0be9f58&amp;id=a9dfc83ccb&amp;f_id=0076b9e0f0'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'E-mail address',
              type: 'email',
              required: true
            }
          ]}
          className={styles.SubscribeForm}
        />
      </div>
      <img src={mailingList} alt='Mailing List Img' />
    </div>
  )
}

export default Subscribe
