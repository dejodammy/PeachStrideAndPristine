import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Peach Strides And Pristines.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Renex - SEO Marketing & IT Services React Next Template" />
                <meta name="og:title" property="og:title" content="Renex - SEO Marketing & IT Services React Next Template"></meta>
                <meta name="twitter:card" content="Renex - SEO Marketing & IT Services React Next Template"></meta>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;