import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'

const Footer = () => {

  return (
    <footer className="py-4">
      <Container>
        &copy; {new Date().getFullYear()} AE Studio
      </Container>
    </footer>
  )
}

export default injectIntl(Footer)
