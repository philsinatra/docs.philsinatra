import { useRouter } from 'next/router'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { useWindowResize } from '../hooks'

type AppContextType = {
  navOpen: boolean
  setNavOpen: (value: boolean) => void
}
type Props = { children: ReactNode }

const AppContext = React.createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: Props) => {
  const router = useRouter()
  const [navOpen, setNavOpen] = useState(false)
  const windowSize = useWindowResize()

  useEffect(() => {
    if (windowSize.width < 1024) setNavOpen(false)
  }, [router.pathname])

  useEffect(() => {
    const t = setTimeout(() => {
      if (windowSize.width >= 1024) {
        setNavOpen(true)
      }
    }, 10)

    return () => clearTimeout(t)
  }, [windowSize.width])

  return (
    <AppContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
