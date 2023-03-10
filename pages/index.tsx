import Head from 'next/head'
import App from '../components/App'

const index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <App />
    </>
  )
}

export default index
