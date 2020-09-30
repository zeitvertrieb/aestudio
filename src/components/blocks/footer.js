import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'

const Footer = () => {

  return (
    <footer className="container py-4">
      &copy; {new Date().getFullYear()} AE Studio
    </footer>
  )
}

export default injectIntl(Footer)
