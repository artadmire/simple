import React, { useEffect } from 'react'
import { fetchHtml } from '../core/api'
import useData from '../core/useData';

const Html5 = ({staticContext}) => {
  const [user, setUser] = useData(staticContext, fetchHtml, {});
  useEffect(() => {
    console.log('User mounted!');
  }, [])
  return (
    <main>
      <h1>Html</h1>
      <button onClick={() => alert('Html')}>click</button>
    </main>
  )
}
Html5.getData = fetchHtml;

export default Html5