import React from 'react';
import './Detail.css';
import { connect } from 'react-redux'

const question = {
  title: 'DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系',
  description: 'dom相关',
  answer: [
    'e.getAttribute()，是标准DOM操作文档元素属性的方法，具有通用性可在任意文档上使用，返回元素在源文件中设置的属性',
    'e.propName通常是在HTML文档中访问特定元素的特性，浏览器解析元素后生成对应对象（如a标签生成HTMLAnchorElement），这些对象的特性会根据特定规则结合属性设置得到，对于没有对应特性的属性，只能使用getAttribute进行访问',
    'e.getAttribute()返回值是源文件中设置的值，类型是字符串或者null（有的实现返回""）'
  ]
}

const Detail = (props) => {
  console.log(props.list)
  return (
    <main>
      <h3>{question.title}</h3>
      {
        question.answer.map((i, index) => <p key={index}><span className="number-detail">{index}:</span> {i}</p>)
      }
    </main>
  )
}
export default connect(({list}) => {return {list} })(Detail)
