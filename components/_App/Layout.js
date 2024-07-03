import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Peach Strides And Pristines.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Peach Stride And Pristine Marketing Solutions" />
                <meta name="og:title" property="og:title" content="Peach Stride And Pristine Marketing Solutions"></meta>
                <meta name="twitter:card" content="Peach Stride And Pristine Marketing Solutions"></meta>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;