import { useCallback, useEffect, useState } from 'react'

const KEY = 'adoCareUser'

export function useAuth() {
  const [user, setUser] = useState(() => localStorage.getItem(KEY))

  useEffect(() => {
    const onStorage = () => setUser(localStorage.getItem(KEY))
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const signIn = useCallback((email) => {
    localStorage.setItem(KEY, email)
    setUser(email)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(KEY)
    setUser(null)
  }, [])

  return { user, signIn, signOut }
}
