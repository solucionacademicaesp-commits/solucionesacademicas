import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/600-italic.css";
import "@fontsource/josefin-sans/700.css";
import "../assets/css/animate.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/fontello.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      timeZone="Austria/Vienna"
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
