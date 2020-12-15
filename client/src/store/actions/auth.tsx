import { AUTH_DARKTHEME_TOGGLE } from '../types'
import { Theme } from '../../../../types'

export const toggleTheme = (payload: Theme) => {
  const theme = payload === 'light' ? 'dark' : 'light'
  localStorage.setItem('user-theme', theme)
  return {
    type: AUTH_DARKTHEME_TOGGLE,
    payload: theme
  }
}