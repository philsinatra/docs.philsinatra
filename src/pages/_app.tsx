import '../styles/prism.css'

import type { AppProps } from 'next/app'
import { AppProvider } from '../state'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
