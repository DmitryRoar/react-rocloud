import React, { useState } from 'react'
import classes from './SwtichTheme.module.scss'

import {useDispatch} from 'react-redux'

import {toggleTheme} from '../../store/actions/auth'
import {Theme} from '../../../../types'

interface Props {
  theme: Theme
}

export const SwitchTheme: React.FC<Props> = ({theme}) => {
  const [modal, setModal] = useState(true)
  const dispatch = useDispatch()

  const switchThemeHandler = () => {
    dispatch(toggleTheme(theme))
  }

  const cls = [classes.Wrap, (!modal && classes.Close)]
  theme === 'dark' ? cls.push(classes.Dark) : cls.push(classes.Light)
  console.log(cls)

  const closeSwithThemeHadnler = () => {
    cls.includes(classes.Close) ? setModal(false) : setModal(true)
    console.log(cls)
  }

  return (
    <div className={cls.join(' ')} >
      <div className={classes.Wave} onClick={closeSwithThemeHadnler}>
        <i className='fas fa-times' />
      </div>
      <div onClick={switchThemeHandler} className={classes.Icon}>
        <div>
          {
            theme === 'dark'
            ? <i className='far fa-moon' />
            : <i className='fas fa-sun' />
          }
        </div>
      </div>
    </div>
  )
}