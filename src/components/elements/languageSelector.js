import React from 'react'
import { injectIntl, IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const LanguageSelector = () => {
  const languageName = {
    de: "Deutsch",
    en: "English"
  }
  return (
    <div className="LanguageSelector list-inline ml-2 mr-auto mr-sm-4">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              role="button"
              key={language}
              onClick={() => changeLocale(language)}
              className={ currentLocale === language ? `active` : `` }
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
