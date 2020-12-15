import React from 'react'
import {useDispatch} from 'react-redux'

import {toggleTheme} from '../../store/actions/auth'
import {Theme} from '../../../../types'

interface Props {
  theme: Theme
}

export const SwitchTheme: React.FC<Props> = ({theme}) => {
  const dispatch = useDispatch()

  const switchThemeHandler = () => {
    dispatch(toggleTheme(theme))
  }

  return (
    <div>
      <button onClick={switchThemeHandler}>
        {theme}
      </button>
    </div>
  )
}