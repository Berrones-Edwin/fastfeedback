import cookie from 'js-cookie'
import Router from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUser } from './db'
import firebase from './firebase'

const authContext = createContext()

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)

  const handleUser = rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser)
      const { token, ...userWithoutToken } = user

      createUser(user.uid, userWithoutToken)

      setUser(user)

      cookie.set('auth', user, {
        expires: 1
      })

      return user
    } else {
      Router.push('/')
      setUser(false)
      cookie.remove('auth')
      return false
    }
  }

  const signInWithGithub = () => {
    Router.push('/dashboard')
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(response => handleUser(response.user))
  }
  const signInWithGoogle = () => {
    Router.push('/dashboard')
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(response => handleUser(response.user))
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false))
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    signInWithGithub,
    signInWithGoogle,
    signOut
  }
}

const formatUser = user => {
  return {
    uid: user.uid,
    name: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoURL: user.photoURL,
    token: user._delegate.accessToken
  }
}
