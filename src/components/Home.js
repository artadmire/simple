import React from 'react';
import { fetchHome } from '../core/api'
import useData from '../core/useData';

const Home = ({staticContext}) => {
  const [home, setHome] = useData(staticContext, fetchHome, {});
  return (
    <main>
      <h1>home page</h1>
      <h2>{home.name}</h2>
    </main>
  )
}
Home.getData = fetchHome;
export default Home
