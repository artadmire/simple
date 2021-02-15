import React from 'react';
import { fetchHome } from '../core/api'
import useData from '../core/useData';

const Module = ({staticContext}) => {
  const [home, setHome] = useData(staticContext, fetchHome, {});
  return (
    <main>
      <h1>Module page</h1>
      <h2>{home.name}</h2>
    </main>
  )
}
Module.getData = fetchHome;
export default Module
