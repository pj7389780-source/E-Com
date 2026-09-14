import React, { useContext } from 'react'
import { ContextProvider, MyStore } from '../context/MyStore';

const comp4 = () => {
  let cd = useContext(MyStore)
  console.log(cd);
  

  return (
    <div>
      <h1>I am comp4</h1>
    </div>
  );
}

export default comp4
