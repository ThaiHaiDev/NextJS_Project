import { SWRConfig } from 'swr'
import '../styles/globals.css'
import axiosClient from '@/api/axiosClient'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppPropsWithLayout } from '../models';
import { createEmotionCache, theme } from '@/utils/index';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
