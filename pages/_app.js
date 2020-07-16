import React from 'react'
import { ApolloProvider } from "@apollo/client";
import { apolloUserClient } from "../lib/apolloClients";
//import { ThemeProvider } from 'styled-components'

import 'react-quill/dist/quill.snow.css';

import '../styles/vars.css'
import '../styles/global.css'
import '../styles/layout.css'
import '../styles/antd.less'


export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={apolloUserClient}>
            <Component {...pageProps} />
            {/* //   <ThemeProvider theme={theme}>
        //   </ThemeProvider> */}
        </ApolloProvider>
    );
}
