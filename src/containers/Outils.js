import React from 'react';
import { List, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

import HeadLayout from './Layout';

const data = [
  {
    title: 'Simulateurs',
    link: 'https://www.adaudit.fr/simulateurs'
  },
  {
    title: 'Sites utiles',
    link:'https://www.adaudit.fr/sites-utiles'
  },
  {
    title: 'Chiffres utiles',
    link:'https://www.adaudit.fr/outils-pratiques/chiffres-utiles'
  },
  {
    title: 'Note de frais',
    link: 'localhost:3000/notedefrais'
  },
];

class Outils extends React.Component {
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
              <Breadcrumb.Item><NavLink exact to='/outils'>Outils</NavLink></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <List
            itemLayout="horizontal"
            size="large"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a href={item.link}>{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </div>
      </HeadLayout>
    );
  }
}

export default Outils;