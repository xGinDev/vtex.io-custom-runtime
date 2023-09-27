import React from 'react'
import {useRuntime} from 'vtex.render-runtime'

const Runtime: StorefrontFunctionComponent<any> = () => {
  console.log('useRuntime', useRuntime())
  
  return (
    <div className="">Runtime</div>
  )
}

export default Runtime