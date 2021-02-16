import React from 'react';
import { List } from 'antd';
import './MyList.css'

const questionsList = ({data = []}) => (
  <List
    itemLayout="horizontal"
    dataSource={data || []}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<p className="number">第{index + 1}题</p>}
          title={item.title}
          description={item.answer && item.answer.map((i, index) => <p key={index + 1}><span className="number-detail">{index}:</span> {i}</p>)}
        />
      </List.Item>
    )}
  />
)
export default questionsList;
