import React, { ReactNode, useContext, useEffect, useState } from 'react'

import { useWindowResize } from '../hooks'

type AppContextType = {
  navOpen: boolean
  setNavOpen: (value: boolean) => void
}
type Props = { children: ReactNode }

const AppContext = React.createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: Props) => {
  const [navOpen, setNavOpen] = useState(true)
  const windowSize = useWindowResize()

  useEffect(() => {
    const t = setTimeout(() => {
      if (windowSize.width >= 1024) {
        setNavOpen(true)
      }
    }, 10)

    return () => clearTimeout(t)
  })

  return (
    <AppContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
