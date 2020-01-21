import React from 'react';
import { List, Avatar, Icon } from 'antd';

const IconText = ({type,text}) => (
    <span>
        <Icon type={type} style={{ marginRight: 8}} />
        {text}
        </span>
);

const Fichiers = (props) => {
    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
            renderItem = {item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />,]}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/maQswyDLcXyDKnZfES.png"/>}
                >
                    <List.Item.Meta
                        avatar= {<Avatar src={item.avatar} />}
                        title = {<a href={`/${item.id}`}>{item.title}</a>}
                        description = {item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    );
}

export default Fichiers;