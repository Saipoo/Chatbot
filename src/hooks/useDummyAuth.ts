import { useState, useEffect } from 'react'
import { dummyUser } from '../data/dummyData'

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: typeof dummyUser | null
}

interface AuthActions {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => void
}

export function useDummyAuth(): AuthState & AuthActions {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    user: null
  })

  useEffect(() => {
    // Simulate checking for existing session
    const timer = setTimeout(() => {
      const savedAuth = localStorage.getItem('dummyAuth')
      if (savedAuth === 'true') {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user: dummyUser
        })
      } else {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null
        })
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const signIn = async (email: string, password: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simple validation - accept any email/password for demo
    if (email && password) {
      localStorage.setItem('dummyAuth', 'true')
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        user: { ...dummyUser, email }
      })
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const signUp = async (email: string, password: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Simple validation
    if (email && password.length >= 6) {
      localStorage.setItem('dummyAuth', 'true')
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        user: { ...dummyUser, email }
      })
    } else {
      throw new Error('Password must be at least 6 characters')
    }
  }

  const signOut = (): void => {
    localStorage.removeItem('dummyAuth')
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null
    })
  }

  return {
    ...authState,
    signIn,
    signUp,
    signOut
  }
}