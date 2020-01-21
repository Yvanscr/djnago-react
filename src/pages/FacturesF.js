import React from 'react';
import { Breadcrumb, Result, Icon, Spin } from 'antd';
import { NavLink } from 'react-router-dom';

import HeadLayout from './../containers/Layout';


class FacturesF extends React.Component {
  
  render() {
    return (
      <HeadLayout>
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink exact to='/home'>Accueil</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/depots'>Dépôts</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink exact to='/facturesF'>Factures Fournisseurs</NavLink></Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <Result
          icon={<Icon type="tool" theme="twoTone" style={{color: 'red'}} />}
          title="Page en cours de développement..."
          extra={<Spin size="large" />}
        />

        </div>
      </HeadLayout>
    );
  }
}

export default FacturesF;