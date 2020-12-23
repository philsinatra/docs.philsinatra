import Link from 'next/link'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { pages } from '../data/pages.json'
import { useWindowResize } from '../hooks'
import { useAppContext } from '../state'
import { StyledNav } from '../styles'
import { slugify } from '../utils'

const Nav = () => {
  const { navOpen, setNavOpen } = useAppContext()!

  const windowSize = useWindowResize()

  useEffect(() => {
    if (windowSize.width < 1024) setNavOpen(false)
  }, [windowSize])

  useEffect(() => {
    const t = setTimeout(() => setNavOpen(navOpen), 10)
    return () => clearTimeout(t)
  }, [{ navOpen }])

  useEffect(() => {
    if (navOpen) {
      if (windowSize.width < 1024) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'visible'
    } else document.body.style.overflow = 'visible'
  }, [navOpen, windowSize])

  return (
    <>
      <StyledNav className={navOpen ? 'is-open' : ''}>
        <nav aria-label="Main">
          <ul>
            {pages.map(page => (
              <li key={uuidv4()}>
                {page.title}
                <ul>
                  {page.items.map(item => (
                    <li key={uuidv4()}>
                      <Link href={`./${slugify(item)}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </StyledNav>
      <div
        className="shroud"
        hidden={navOpen ? false : true}
        onClick={() => setNavOpen(false)}
      />
    </>
  )
}

export default Nav
