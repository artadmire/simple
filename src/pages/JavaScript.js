import React from 'react';
import { fetchJavaScript } from '../core/api';
import useData from '../core/useData';
import QuestionsList from '../components/MyList';
import { connect } from 'react-redux';

const JavaScript = ({staticContext, list}) => {
  // console.log('list', list);
  const [javaScript, setJavaScript] = useData(staticContext, fetchJavaScript, {});
  return (
    <div>
      <QuestionsList data={javaScript.data || []}/>
    </div>
  )
}
JavaScript.getData = fetchJavaScript;
export default connect(({list}) => {return {list} })(JavaScript);
