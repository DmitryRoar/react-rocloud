import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthLayout } from './layouts/Auth/AuthLayout'
import { MainLayout } from './layouts/Main/MainLayout'
import { LoginPage } from './pages/Auth/Login'
import { SignupPage } from './pages/Auth/Signup'
import { HomePage } from './pages/Home/HomePage'

export const useRoutes: React.FC<boolean> = (isAuth) => {
  if (isAuth) {
    return (
      <MainLayout>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Redirect to='/' />
        </Switch>
      </MainLayout>
    )
  }

  return (
    <AuthLayout>
      <Switch>
        <Route path='/auth/login' exact component={LoginPage} />
        <Route path='/auth/signup' exact component={SignupPage} />
        <Redirect to='/auth/login' />
      </Switch>
    </AuthLayout>
  )
}