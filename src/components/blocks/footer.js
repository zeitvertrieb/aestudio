import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container } from 'react-bootstrap'

const Footer = () => {

  return (
    <footer className="py-4">
      <Container>
        &copy; {new Date().getFullYear()} <FormattedMessage id="companyName" /> – <FormattedMessage id="title" />
      </Container>
    </footer>
  )
}

export default injectIntl(Footer)
