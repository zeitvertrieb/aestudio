import React from 'react'
import { injectIntl, FormattedMessage, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const LanguageSelector = () => {
  const languageName = {
    de: "Deutsch",
    en: "English"
  }
  return (
    <div className="LanguageSelector list-inline ml-2 mr-auto">
      <span className="sr-only"><FormattedMessage id="action.selectLanguage" /></span>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              href="#"
              key={language}
              onClick={() => changeLocale(language)}
              className={ currentLocale === language ? `nav-link active` : `nav-link` }
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default injectIntl(LanguageSelector)
