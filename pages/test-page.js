import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Direct Configuration Liaison</title>
          <meta
            property="og:title"
            content="test-page - Direct Configuration Liaison"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_26liti) => (
            <>
              <h1>{context_26liti?.Name}</h1>
            </>
          )}
          initialData={props.context26litiProp}
          persistDataDuringLoading={true}
          key={props?.context26litiProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context26litiProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context26litiProp: context26litiProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
