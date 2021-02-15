import React, { useEffect } from 'react'

const NotFind = () => {
 
  useEffect(() => {
    console.log('App mounted!')
  }, [])
  return (
    <main>
      <h1>NotFind</h1>
      <button onClick={() => alert('NotFind')}>click</button>
    </main>
  )
}

export default NotFind