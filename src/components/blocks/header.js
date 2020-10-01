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
      <Navbar as="header" collapseOnSelect expand="sm" id="site-navbar" variant="light">
        <Container>
          <Navbar.Brand href="#">ae studio</Navbar.Brand>
          <LanguageSelector />
          <a className="sr-only sr-only-focusable nav-link p-2 mr-2" href="#main">
            <FormattedMessage id="action.skipNavigation" />
          </a>
          <Navbar.Toggle aria-controls="top-navbar-nav">
            <span className="icon" />
            <span className="sr-only">Menu</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="top-navbar-nav">
            <Nav as="ul" className="">
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
          <Navbar.Toggle aria-controls="top-navbar-nav" className="navbar-backdrop">
            <span className="sr-only">Close menu</span>
          </Navbar.Toggle>
        </Container>
      </Navbar>
  )
}

export default injectIntl(Header)
