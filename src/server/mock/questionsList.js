module.exports = {
  success: true,
  data: [
    {
      title: 'DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系',
      description: 'dom相关',
      answer: [
        'e.getAttribute()，是标准DOM操作文档元素属性的方法，具有通用性可在任意文档上使用，返回元素在源文件中设置的属性',
        'e.propName通常是在HTML文档中访问特定元素的特性，浏览器解析元素后生成对应对象（如a标签生成HTMLAnchorElement），这些对象的特性会根据特定规则结合属性设置得到，对于没有对应特性的属性，只能使用getAttribute进行访问',
        'e.getAttribute()返回值是源文件中设置的值，类型是字符串或者null（有的实现返回""）',
        '大部分attribute与property是一一对应关系，修改其中一个会影响另一个，如id，title等属性',
        '一些布尔属性<input hidden/>的检测设置需要hasAttribute和removeAttribute来完成，或者设置对应property',
        '像<a href="../index.html">link</a>中href属性，转换成property的时候需要通过转换得到完整URL',
        '一些attribute和property不是一一对应如：form控件中<input value="hello"/>对应的是defaultValue，修改或设置value property修改的是控件当前值，setAttribute修改value属性不会改变value property'
      ]
    },
    {
      title: 'offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别',
      description: '基础题',
      answer: [
        'offsetWidth/offsetHeight返回值包含content + padding + border，效果与e.getBoundingClientRect()相同',
        'clientWidth/clientHeight返回值只包含content + padding，如果有滚动条，也不包含滚动条',
        'scrollWidth/scrollHeight返回值包含content + padding + 溢出内容的尺寸',
      ]
    },
    {
      title: 'sessionStorage,localStorage,cookie区别',
      description: '高频题',
      answer: [
        '都会在浏览器端保存，有大小限制，同源限制',
        'cookie会在请求时发送到服务器，作为会话标识，服务器可修改cookie；web storage不会发送到服务器',
        'cookie有path概念，子路径可以访问父路径cookie，父路径不能访问子路径cookie',
        '有效期：cookie在设置的有效期内有效，默认为浏览器关闭；sessionStorage在窗口关闭前有效，localStorage长期有效，直到用户删除',
        '共享：sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享',
        'localStorage的修改会促发其他文档窗口的update事件',
        'cookie有secure属性要求HTTPS传输',
        '浏览器不能保存超过300个cookie，单个服务器不能超过20个，每个cookie不能超过4k。web storage大小支持能达到5M'
      ]
    },
    {
      title: '===运算符判断相等的流程是怎样的',
      description: '基础题',
      answer: [
        '如果两个值不是相同类型，它们不相等',
        '如果两个值都是null或者都是undefined，它们相等',
        '如果两个值都是布尔类型true或者都是false，它们相等',
        '如果其中有一个是NaN，它们不相等',
        '如果都是数值型并且数值相等，他们相等， -0等于0',
        '如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同和=都认为他们不相等',
        '如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等',
      ]
    },
    {
      title: '什么闭包,闭包有什么用',
      description: '高频题',
    },
  ]
}