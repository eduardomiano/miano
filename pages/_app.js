import '../styles/globals.css'
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from '../services/msal';

export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <MsalProvider instance={msalInstance}>
            {getLayout(<Component {...pageProps} />)}
        </MsalProvider>
    )
}
