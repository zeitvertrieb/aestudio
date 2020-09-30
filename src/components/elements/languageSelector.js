import React from 'react'
import { injectIntl, IntlContextConsumer, changeLocale, FormattedMessage } from 'gatsby-plugin-intl'

const LanguageSelector = () => {
  const languageName = {
    en: "English",
    de: "Deutsch"
  }
  return (
    <ul className="list-inline m-0">
        <IntlContextConsumer>
          { ({ languages, language: currentLocale }) =>
            languages.map(language => (
              <li
                key={language}
                onClick={() => changeLocale(language)}
                className="list-inline-item py-2"
                >
                <span>{languageName[language]}</span>
              </li>
            ))
          }
        </IntlContextConsumer>
    </ul>
  )
}

export default injectIntl(LanguageSelector)
