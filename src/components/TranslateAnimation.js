import React from 'react'
import TweenOne from 'rc-tween-one'

const TranslateAnimation = props => {
  return (
    <TweenOne
      animation={{
        y: 0,
        duration: 700,
        scale: 1,
        delay: props.delay
      }}
      style={{ transform: 'translateY(-200px) scale(0)' }}
    >
      {props.children}
    </TweenOne>
  )
}

export default TranslateAnimation
