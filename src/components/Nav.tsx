import Link from 'next/link'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { pages } from '../data/pages.json'
import { useWindowResize } from '../hooks'
import { useAppContext } from '../state'
import { StyledNav } from '../styles'
import { slugify } from '../utils'
import { Shroud } from '.'

const Nav = () => {
  const { navOpen, setNavOpen } = useAppContext()!

  const navBreak = 1024
  const windowSize = useWindowResize()

  useEffect(() => {
    if (windowSize.width < navBreak) setNavOpen(false)
  }, [windowSize])

  useEffect(() => {
    const t = setTimeout(() => setNavOpen(navOpen), 10)
    return () => clearTimeout(t)
  }, [{ navOpen }])

  return (
    <>
      <StyledNav className={navOpen ? 'is-open' : ''}>
        <nav aria-label="Main">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
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

      {navOpen && windowSize.width < navBreak && (
        <Shroud open={navOpen} setOpen={setNavOpen} />
      )}
    </>
  )
}

export default Nav
