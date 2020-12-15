import React, { useMemo } from 'react'

import {useSelector} from 'react-redux'
import {AuthReducer} from '../../store/reducers/auth'

import {SwitchTheme} from '../../containers/SwitchTheme/SwitchTheme'
import {Theme} from '../../../../types'

export const AuthLayout: React.FC = ({children}) => {
  const reducerTheme = useSelector((state: AuthReducer) => state.auth.theme)

  const theme = useMemo(() => {
    return localStorage.getItem('user-theme') as Theme 
  }, [reducerTheme, localStorage.getItem('user-theme')])

  return (
    <div className={`${theme}-theme`}>
      <SwitchTheme theme={theme} />

      {children}
    </div>
  )
}