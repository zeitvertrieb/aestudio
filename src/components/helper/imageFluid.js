import React from 'react'
import Img from 'gatsby-image'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'

const ImageFluid = ({ intl, data }) => {
  return (
    <Img fadeIn fluid={data.file.childImageSharp.fluid} alt={intl.formatMessage({ id: "title" })} />
  )
}

export default injectIntl(ImageFluid)

export const query = graphql`
  query {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
