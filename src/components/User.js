import React, { useEffect } from 'react'
import { fetchUser } from '../core/api'
import useData from '../core/useData';

const User = ({staticContext}) => {
  // console.log(staticContext, 'staticContext');
  const [user, setUser] = useData(staticContext, fetchUser, {});
  useEffect(() => {
    console.log('User mounted!');
  }, [])
  return (
    <main>
      <h1>user</h1>
      <button onClick={() => alert('user')}>click</button>
    </main>
  )
}
User.getData = fetchUser;

export default User