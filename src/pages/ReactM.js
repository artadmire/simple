import React from 'react';
import { fetchJavaScript } from '../core/api'
import useData from '../core/useData';

const ReactM = ({staticContext}) => {
  const [reactM, setHome] = useData(staticContext, fetchJavaScript, {});
  return (
    <main>
      <h1>Module page</h1>
      <h2>{home.name}</h2>
    </main>
  )
}
ReactM.getData = fetchJavaScript;
export default ReactM
