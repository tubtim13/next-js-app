import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Sidebar from './sidebar'
import Head from 'next/head'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const handelHeader = function getLayout(page:ReactElement|ReactNode){
  return (
    <>
     <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
     {page}
    </>
  )
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => (<Sidebar childern={page}></Sidebar>))

  return handelHeader(getLayout(<Component {...pageProps} />))
}

export default MyApp
 