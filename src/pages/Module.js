import React from 'react';
import { fetchJavaScript } from '../core/api'
import useData from '../core/useData';

const Module = ({staticContext}) => {
  const [home, setHome] = useData(staticContext, fetchJavaScript, {});
  return (
    <main>
      <h1>Module page</h1>
      <h2>{home.name}</h2>
    </main>
  )
}
Module.getData = fetchJavaScript;
export default Module
