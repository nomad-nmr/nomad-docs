import React from 'react'
import TranslateAnimation from './TranslateAnimation'

const Title = () => (
  <h1 className='hero__title' style={{ display: 'flex', justifyContent: 'center' }}>
    <TranslateAnimation delay={0}>
      <span style={{ color: 'red' }}>N</span>
    </TranslateAnimation>
    <TranslateAnimation delay={50}>
      <span style={{ color: 'yellow', marginLeft: 3 }}>O</span>
    </TranslateAnimation>
    <TranslateAnimation delay={100}>
      <span style={{ color: 'green', marginLeft: 3 }}>M</span>
    </TranslateAnimation>
    <TranslateAnimation delay={150}>
      <span style={{ color: 'blue', marginLeft: 3 }}>A</span>
    </TranslateAnimation>
    <TranslateAnimation delay={200}>
      <span style={{ color: 'purple', marginLeft: 3 }}>D</span>
    </TranslateAnimation>
  </h1>
)

export default Title
