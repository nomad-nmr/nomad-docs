import React from 'react'
import TweenOne from 'rc-tween-one'
import logoRound from '@site/static/img/logo-round.png'

const Logo = () => (
  <TweenOne
    animation={{
      opacity: 1,
      scale: 1,
      rotate: 360,
      duration: 700,
      delay: 500
    }}
    style={{ opacity: 0, transform: 'scale(0)' }}
  >
    <img src={logoRound} style={{ width: '40%', margin: '0 100px' }} />
  </TweenOne>
)

export default Logo
