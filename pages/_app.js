import React from 'react'
import { ApolloProvider } from "@apollo/client";
import { apolloUserClient } from "../lib/apolloClients";
import AppLayout from 'components/layout'
//import { ThemeProvider } from 'styled-components'

// import 'react-quill/dist/quill.snow.css'; // for RTE

import '../styles/vars.css'
import '../styles/global.css'
import '../styles/layout.css'
import '../styles/antd.less'
import '../styles/overridden_ant_style.css'
import 'node_modules/video-react/styles/scss/video-react.scss'



export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={apolloUserClient}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
            {/* //   <ThemeProvider theme={theme}>
        //   </ThemeProvider> */}
        </ApolloProvider>
    );
}
