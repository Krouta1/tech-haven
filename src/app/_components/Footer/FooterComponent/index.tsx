'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

type FooterComponentProps = {
  footer: Footer
}

const FooterComponent = ({ footer }: FooterComponentProps) => {
  const pathname = usePathname()

  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inc, index) => (
            <li key={inc.title}>
              <Image
                src={inc.icon}
                alt={inc.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inc.title}</h5>
              <p>{inc.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href={'/home'}>
              <Image src={'/logo-white.svg'} alt="Logo" width={170} height={50} />
            </Link>
            <p>{footer.copyright}</p>
            <div className={classes.sociaLinks}>
              {navItems.map(item => {
                const icon = item.link.icon as Media
                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.sociaLinkItem}
                  >
                    <Image
                      src={icon.url}
                      alt={icon.alt}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
