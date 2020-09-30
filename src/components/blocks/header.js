import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Navbar, Nav } from 'react-bootstrap'
import LanguageSelector from '../elements/LanguageSelector'

const Header = ({ intl }) => {

  const menu = [
    {
      label: intl.formatMessage({ id: "main.navigation.home" }),
      link: '',
    }
  ]

  return (
    <header className="navbar__wrapper">
      <Navbar collapseOnSelect expand="sm" id="site-navbar" variant="light">
        <Container>
          <a className="sr-only sr-only-focusable nav-link" href="#main">
            <FormattedMessage id="action.skipNavigation" />
          </a>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <LanguageSelector />
          <Navbar.Collapse id="top-navbar-nav">
            <Nav as="ul" className="ml-md-auto">
              {menu.map(function(item, i) {
                return (
                  <li key={i} className="nav-item">
                    <Link to={"/" + item.link} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default injectIntl(Header)
