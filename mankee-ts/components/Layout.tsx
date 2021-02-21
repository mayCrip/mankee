import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
  title?: string
}

const RootWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
`
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: .5em;
  padding: 0 12px;
  font-size: 1.2em;
`
const Header = styled.header`
  display: flex;
  align-items: center;
`
const LogoTitle = styled.h1`
  padding: 0 24px;
  color: ${(props) => props.theme.palette.common.darkGray};
`
const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <RootWrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet" />
    </Head>
    <Header>
      <Link href="/">
        <LogoLink><LogoTitle>Mankee</LogoTitle></LogoLink>
      </Link>
      <nav>
        <NavList>
          <li>
            <Link href="/"><a>Decs</a></Link>
          </li>
          <li>
            <Link href="/decks/new"><a>Add Deck</a></Link>
          </li>
        </NavList>
      </nav>
    </Header>
    <div>
      {children}
    </div>

  </RootWrapper>
)

export default Layout
