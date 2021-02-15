import { useState, useEffect } from 'react'

const useData = (staticContext, getData, initial) => {
  const getInitialData = () => {
    if(staticContext) {
      return staticContext;
    };
    if(window.__APP_DATA__) {
      return window.__APP_DATA__;
    }
    return initial;
  };

  const [data, setData] = useState(getInitialData());
  useEffect(() => {
    if(window.__APP_DATA__) {
      window.__APP_DATA__ = undefined;
      return;
    }
    if(typeof getData === 'function') {
      getData().then((data) => console.log(data, 'data'))
    }

  }, [])
  
  return [data, setData];
}
export default useData;