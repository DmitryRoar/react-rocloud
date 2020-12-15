import React from 'react'
import './App.scss'

import Img from '@img/roar.png'

export const App: React.FC = () => {
  return (
    <div>
      <p>App</p>
      <img src={Img} />
    </div>
  )
}