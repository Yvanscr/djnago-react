import React from 'react';
import { List, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

import HeadLayout from './Layout';

const data = [
  {
    title: 'Dépôts',
    link: '/depots'
  },
  {
    title: 'Outils',
    link:'/outils'
  },
  {
    title: 'Mes fichiers',
    link:'/mesfichiers'
  },
  {
    title: 'Relevé kilomètique',
    link: '/bilan'
  },
  {
    title: 'Alertes',
    link:'/alertes'
  },
  {
    title: 'Le cabinet',
    link:'/cabinet'
  },
];

class Home extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <HeadLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink exact to='/home'>Accueil</NavLink></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <List
            itemLayout="horizontal"
            size="large"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<NavLink exact to={item.link}>{item.title}</NavLink>}
                />
              </List.Item>
            )}
          />
        </div>
      </HeadLayout>
    );
  }
}

export default Home;