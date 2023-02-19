import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

const Format = ({ children }: any) => {
    return (
        <>
            <Head>
                <title>Blog NextJS</title>
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Format