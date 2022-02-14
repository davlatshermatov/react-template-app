import { IntlProvider } from "react-intl";
import { LOCALES } from "./constants";
import { Fragment } from "react";
import messages from "./messages";
import flatten from "flat";
// import PropTypes from 'prop-types';

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={flatten(messages[locale])}
  >
    {children}
  </IntlProvider>
);

// Provider.displayName = "I18nProvider";

// Provider.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   locale: PropTypes.oneOf(Object.values(LOCALES)),
// };

// Provider.defaultProps = {
//   locale: LOCALES.FRENCH,
// };

export default Provider;
