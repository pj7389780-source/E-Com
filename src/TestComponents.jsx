import React, { useContext, useState } from 'react'
import Comp1 from './components/Comp1'
import { MyStore } from './context/MyStore'

const TestComponents = () => {


  let cd = useContext(MyStore);
  console.log(cd)

  return (
    <div>
      <h1>I am test comp</h1>
      <Comp1/>
    </div>
  )
}

export default TestComponents
